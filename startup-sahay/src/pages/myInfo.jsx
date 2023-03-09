import React from 'react'

const MyInfo = () => {
  return (
    <div className='mt-28'>
        <div className='flex flex-col items-center justify-center  gap-5'>
            <div className=' flex flex-col text-center gap-5 pb-8'>
              <h1  className='text-4xl font-normal'>Personal info</h1>
            <p>Information about you and your company</p>
              </div>
        </div>
        <div className=' basic-info flex flex-col gap-5 border rounded-md max-w-screen-md mx-auto p-5'>
            <div>
            <h1 className='font-normal text-3xl'>Basic info</h1>
            </div>
            <div className='flex flex-col gap-5'>
            <div  className='flex gap-36 border-b-2 max-w-screen-sm pb-3'>
              <h2 className='text-slate-400'>CompanyName</h2>
              <p className='text-lg'>RumBum</p>
            </div >
            <div className='flex gap-44 border-b-2 max-w-screen-sm pb-3'>
              <h2 className='text-slate-400'>yourEmail</h2>
              <p className='text-lg'>devang6314@gmail.com</p>
            </div>
            <div className='flex gap-48 border-b-2 max-w-screen-sm pb-3'>
              <h2 className='text-slate-400'>Address</h2>
              <p className='text-lg'>bla bla bla</p>
            </div>
            <div className='flex gap-44 border-b-2 max-w-screen-sm pb-3'>
              <h2 className='text-slate-400'>Phone No.</h2>
              <p className='text-lg'>9999999999</p>
            </div>
           
        

            </div>
        </div>
    </div>
  )
}

export default MyInfo