import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import React from 'react'
import  Done from '../../public/done1.svg'


const FormDone = () => {
  const router=useRouter()
  return (
    <div className='bg-slate-800'>
    <div className=' h-screen w-1/3 min-w-[300px] flex flex-col justify-center mx-auto  '>
       

        <div className='border rounded-md bg-slate-300   flex flex-col items-center gap-2   pt-6  p-5 '>
        
          <Image src={Done} alt="img"  />
          
              <p className='text-2xl text-center'>Form Submitted SuccessFully</p>
              <button className='mt-12 text-white px-3 py-2  rounded-md bg-blue-600 hover:bg-blue-800 duration-500' onClick={()=>router.push('/login')}>Login now</button>

        </div>
    </div>
    </div>
  )
}

export default FormDone