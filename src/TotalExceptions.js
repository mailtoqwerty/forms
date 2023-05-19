import React, { useState ,useEffect} from 'react'
import axios from 'axios';
const TotalExceptions = () => {
    const[data,setData]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5241/api/Exception").then((response) => {
          setData(response.data);
        });
      }, []);

  return (
    <div className='container m-3 table-responsive'>
        <h3><center>Total_Exceptions</center></h3>      
      <table className=" table table-bordered">
      <thead>
        <tr className='bg-warning'>
            <div>
                <th>ID</th>
                <th>FACTOR_NAME</th>
                <th>Value</th>
                <th>start_Date</th>
                <th>value_2</th>
                <th>value_3</th>
                <th>isActive</th>
                <th>dMWB_IsExcep</th>
                <th>dMWB_ExcepDesc</th>
                <th>dMWB_timeStamp</th>
                <th>exception_Stage</th> 
            </div>           
   
            
        </tr>
          
         
      </thead>
      <tbody className='table table-bordered'>
      
          
          {
        data.map((innerArray, outerIndex) => (
          <div key={outerIndex}>
            {innerArray.map((item, innerIndex) => (
              <tr key={innerIndex} className='border'>
                <td>{item.iD}</td> 
                <td>{item.fACTOR_NAME}</td>
                <td>{item.value}</td>
                <td>{item.start_Date}</td>
                <td>{item.value_2}</td>
                <td>{item.value_3}</td>
                <td>{item.isActive}</td>
                <td>{item.dMWB_IsExcep}</td>
                <td>{item.dMWB_ExcepDesc}</td>
                <td>{item.dMWB_timeStamp}</td>
                <td>{item.exception_Stage}</td>                    
              </tr>
            ))}
          </div>
        ))
      }
     
  </tbody> 
      </table>
    </div>
  )
}

export default TotalExceptions