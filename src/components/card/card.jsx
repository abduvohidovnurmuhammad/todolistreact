import React, { useState } from "react";


const Card = ({ name, age, phone, id ,Efunc,del }) => {
  const [inputval,Func] = useState({name:name,age:age,phone:phone,id:id})
  
  const [EditChange, Setchange] = useState(false)
  const change =(e)=>{
    Func((p)=>{
     return {...p,[e.target.name]:e.target.value,
     }
    })
   }

   const Delfunc = ()=> {
    del(inputval)
   }
  const submit = (e)=>{
    e.preventDefault()
  
    Efunc(inputval)
    Setchange(false)
  }
  return (<>{!EditChange
    ?
    <div > <h1 >{name ? name : ""}</h1>
      <p >{age ? age : ""}</p>
      <p >{phone ? phone : ""}</p>
      <button onClick={() => Setchange(!EditChange)}>Edit</button>
      <button onClick={()=>Delfunc()} type="button">Delete</button> </div> : 
        <form  onSubmit={submit}>
        <input   onChange={change} defaultValue={name} type="text" name="name" /> <br />
          <input  onChange={change} defaultValue={age} type="text" name="age" /><br />
          <input onChange={change} defaultValue={phone} type="text" name="phone" /><br />
          <button  type="submit">save</button>
          <button onClick={()=>Setchange(false)} type="button">Cancel</button>
        </form>
 

  }


  </>)
}
export default Card
