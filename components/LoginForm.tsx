import { signIn } from 'next-auth/react'
import React from 'react'
import githubLogo from "@/public/github-logo.png"
import googleLogo from "@/public/google-logo.png"
import Image from 'next/image'

const LoginForm = () => {
  return (
    <main className='w-full h-screen bg-backgroundColor flex justify-center items-center'>
        <div className='flex flex-col gap-3 rounded-md md:w-1/4 w-[80%] bg-slate-300 p-5'>
            <h3 className='text-center text-3xl font-bold text-[#00215E]'>KadiJoke</h3>
            <button className="bg-secondaryColor flex items-center px-3 py-2 rounded-md justify-between font-semibold" onClick={() => signIn("google")}><p>Sign in with</p> <Image src={googleLogo} width={30} height={30} alt='google-logo'/></button>
            <button className="bg-secondaryColor flex items-center px-3 py-2 rounded-md justify-between font-semibold" onClick={() => signIn("github")}><p>Sign in with</p> <Image src={githubLogo} width={30} height={30} alt='github-logo'/></button>
        </div>
    </main>
  )
}

export default LoginForm