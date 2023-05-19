import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
function Dmdashboard(batchid ) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5241/api/Exception/BAT001 ").then((response) => {
      setData(response.data);
    });
  }, []);


  return (
    <div  className="container">
        <h2 className="center">Exceptions :</h2>
      
    <table className=" table table-border form">
       <thead> 
            <tr className="bg-warning ">           
          
                {data.length > 0 &&
                Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
            
            </tr>
      </thead>
      <tbody className="border">
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody> 
    </table>    
   </div>   
  );
}

export default Dmdashboard;