import Image from "next/image";

import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <main
      className="
      flex
      flex-col
      justify-center
      min-h-full
    bg-gray-100    
      py-12
      sm:py-6
      lg:py-8
    "
    >
      <section className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="48"
          width="68"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tighter 
            text-gray-900"
        >请登录您的账号</h2>
      </section>
      <AuthForm />
    </main>
  );
}
