import { useRouter } from 'next/router'
import React from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks


const privateRoute = () => {
    const router = useRouter()


  return (
    <div className='bg-slate-800 h-screen'>
       <div className='h-screen w-1/3 min-w-[300px] flex flex-col justify-center mx-auto'>
        <div className='border rounded-md bg-slate-300   flex flex-col items-center gap-2 pt-6  p-5'>
            <h1 className='text-2xl'>Please Make sure You Logged in...</h1>
            <span  onClick={() => router.push("/login")} className='font-bold hover:scale-95'>Click here</span>
        </div>
        </div>
    </div>
  )
}

export default privateRoute