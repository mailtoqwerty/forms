import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ConfigNormalization = () => {
    const [data,setData]=useState([]);
    
    useEffect(() => {
  
        axios.get('http://localhost:5241/api/NormalizationConfiguration')
            .then(response => {setData(response.data)})
            .catch(error => {console.error(error)})
          
        }, []);
      
        const handleDelete = (fileName) => {
          axios.delete(`http://localhost:5241/api/NormalizationConfiguration/${fileName}`)
            .then(response => {
              setData( data.filter(item => item.fileName !== fileName));
            })
            .catch(error => console.log(error));
        };

  return (
    <div className='container mt-5'>
        <div className='form-contral'>
            <h3><strong><center>Normalization_Configuration_Details</center></strong></h3>
            <table className=' table table-bordered' >
               <thead>
               <tr className='   bg-warning  text-light'>
                    <th>BatchId</th>
                    <th>FieldName</th>
                    <th>TableName</th>
                    <th>ColumnName</th>
                </tr>
                {
                    data.map((item,id)=>{
                        return(
                            <tr key={id}>
                                <td>{item.batchId}</td>
                                <td>{item.fieldName}</td>
                                <td>{item.tableName}</td>
                                <ttd>{item.columnName}</ttd>
                            </tr>
                        )
                    })
                }
               </thead>
            </table>
        </div>        
    </div>
  )
}

export default ConfigNormalization