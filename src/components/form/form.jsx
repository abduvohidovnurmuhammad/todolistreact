import React, { useState } from "react";
import Card from "../card/card";
const Formfunc = ({a})=>{ 
  const [inputval,Func] = useState({name:"",age:"",phone:""})
  const [data,SetData] = useState([])

const change =(e)=>{
 Func((p)=>{
  return {...p,[e.target.name]:e.target.value,
 id:data.length+1
  }
 })
}

const Efunc =(item)=>{
SetData(data.map((p)=>{
  return  p.id !== item.id ? p : item
  })
  )

}

const del = (item)=>{

  SetData(data.filter((p)=>{
    return p.id!== item.id
  })
  )
}
const submit = (e)=>{
e.preventDefault()
SetData((inputval.name || inputval.age || inputval.phone ) ? [...data,inputval] : data )

Func({name:"",age:"",phone:""}) 
}


  return <>
  <form  onSubmit={submit}>
    <input  onChange={change} value={inputval.name} type="text" name="name" placeholder="ism" /><br />
    <input  onChange={change} value={inputval.age} type="text" name="age" placeholder="yosh" /><br />
    <input  onChange={change} value={inputval.phone} type="text" name="phone" placeholder="nomer"/><br />
    <button type="submit">Submit</button>
    </form>
    <div >
    {data?.map((p)=>(
 
 <Card del ={del} Efunc={Efunc} key ={p.id} {...p} />
 ))}
    </div>
 
  </>
}

export default Formfunc