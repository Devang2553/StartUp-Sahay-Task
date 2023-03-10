import React from 'react'

const CheakStep = ({label ,label2,label3,label4,label5,p, onChange}) => {
  return (
    <div className='flex flex-col pt-4 gap-1 border-b-2 pb-4 border-slate-400 '>
        <p>{p}</p>
        <div>
            <input type={"checkbox"} id={label} onChange={onChange}/>
            <label>{label}</label><br/>
            <input type={"checkbox"} id={label} onChange={onChange}/>
            <label>{label2}</label><br/>
            <input type={"checkbox"} id={label} onChange={onChange}/>
            <label>{label3}</label><br/>
            <input type={"checkbox"} id={label} onChange={onChange}/>
            <label>{label4}</label><br/>
           <input type={"checkbox"} id={label} onChange={onChange}/>
            <label>{label5}</label><br/>
        </div>
    </div>
  )
}

export default CheakStep
