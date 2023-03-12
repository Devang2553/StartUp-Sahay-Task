import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import React from 'react'
import  Done from '../../public/done1.svg'


const LoginDone = () => {
  const router=useRouter()
  return (
    <div className='bg-slate-800'>
    <div className=' h-screen w-1/3 min-w-[300px] flex flex-col justify-center mx-auto  '>
        {/* <div className='text-white  w-[400px] flex flex-col items-center justify-center mx-auto gap-5 p-5   border'>
            <h1 className='mt-10'>Login SuccessFully</h1>
            <button className='mt-20 bg-blue-400 px-2 py-2 rounded-md hover:bg-blue-600'>Go to DashBoard</button>
        </div> */}

        <div className='border rounded-md bg-slate-300   flex flex-col items-center gap-2   pt-6  p-5 '>
          {/* <Done   className="mb-5"/> */}
          <Image src={Done} alt="img"  />
          
              <p className='text-2xl'> Register Succeed</p>
              <button className='mt-12 text-white px-3 py-2  rounded-md bg-blue-600 hover:bg-blue-800 duration-500' onClick={()=>router.push('/StepperForm')}>Fill the form</button>

        </div>
    </div>
    </div>
  )
}

export default LoginDone