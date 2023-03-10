import React from 'react'

const RadioStep = ({p , label , label2 ,onChange}) => {
  return (
    <div className='pt-4 border-b-2 pb-4 border-slate-400'>
            <p>{p}</p>
        <div className='flex flex-row gap-4 '>
            <input   type={"radio"} id={label} value={label} name={label} onChange={onChange}/>
            <label>{label}</label>
            <input  type={"radio"} id={label2} value={label2} name={label} onChange={onChange}/>
            <label>{label2}</label>
        
        </div>
    </div>
  )
}

export default RadioStep
