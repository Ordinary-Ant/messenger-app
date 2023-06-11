"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsWechat, BsTencentQq } from "react-icons/bs";
import Button from "@/app/components/Button";
import Input from "@/app/components/input/Input";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  // 登录还是注册
  const [variant, setVariant] = useState<Variant>("LOGIN");

  // Loading
  const [isloading, setIsLoading] = useState<boolean>(false);

  // 切换模式
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  // 应用useForm hooks
  // 传入表单初始化参数
  // 得到注册、提交钩子，表单状态错误信息
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 提交表单
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      // axios
    }
    if (variant === "LOGIN") {
      // next
    }
  };

  // 提交方式
  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
        bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        {/* 表单 */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" errors={errors} register={register} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            errors={errors}
            register={register}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            errors={errors}
            register={register}
          />
          <div>
            <Button disabled={isloading} fullWidth type="submit">
              {variant === "REGISTER" ? "注册" : "登录 "}
            </Button>
          </div>
        </form>

        {/* 登录方式 */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsWechat}
              onClick={() => socialAction("wechat")}
            />
            <AuthSocialButton
              icon={BsTencentQq}
              onClick={() => socialAction("tencent")}
            />
          </div>
        </div>

        {/* 登录注册切换 */}
        <div
          className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
        "
        >
          <span>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </span>
          <span onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
