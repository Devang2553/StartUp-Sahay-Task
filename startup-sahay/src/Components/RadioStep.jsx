import React from 'react'

const RadioStep = ({p , label , label2 ,onChange , name , name2}) => {
  return (
    <div className='pt-4 border-b-2 pb-4 border-slate-400'>
            <p>{p}</p>
        <form className='flex flex-row gap-4 '>
            <input  type={"radio"} id={label} value={label} name={name} onChange={onChange}/>
            <label>{label}</label>
            <input  type={"radio"} id={label2} value={label2} name={name2} onChange={onChange}/>
            <label>{label2}</label>
        
        </form>
    </div>
  )
}

export default RadioStep