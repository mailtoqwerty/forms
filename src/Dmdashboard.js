import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css'
import Exceptions from './Exceptions'
function Dmdashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5241/api/BatchStautsSummary').then((response) => {
      setData(response.data);
    });
    
  }, []);

 
  return (
    <div  className="container">
        <h2 className="center">BatchStatus: Summary</h2>

    <table className=" table table-border form">
      <thead>
        <tr className="bg-warning ">
            <th>BatchId</th>
            <th>RunId</th>
            <th>ProcessStage</th>
            <th>StartTime</th>
            <th>EndTime</th>
            <th>Duration</th>
            <th>Satus</th>
            <th>Total Records</th>
            <th>Exceptions</th>
            <th>Successfull Records</th>
        </tr>
      </thead>
      <tbody className="border">     
    
       
        
       {data.map((item,id)=>{
        return(
            <tr key={id}>
                <td>{item.batchId}</td>  
                <td>{item.runId}</td>    
                <td>{item.processStage}</td>         
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
                <td>{item.duration}</td>
                <td>{item.status}</td>                
                <td><Link to='/totalrecords'>{item.totalRecords}</Link></td>
                <td><Link to={"/exceptions/"+item.batchId}>{item.exceptions}</Link></td>
                <td><Link to='/successrecords' >{item.successfulRecords}</Link></td>
            </tr>
        )
            
       })}

      </tbody>
    </table>
   

    </div>
   
  );
}

export default Dmdashboard;