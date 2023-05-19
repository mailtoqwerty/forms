import axios from 'axios';
import React, { useState } from 'react'

const DemoExceptions = () => {
    const[data,setData]=useState([]);
    const handelExceptions=()=>{
        axios.get().then(res=>setData(res.data));
    }
  return (
    <div>
         

    </div>
  )
}

export default DemoExceptions