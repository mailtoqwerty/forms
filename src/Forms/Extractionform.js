import React,{ useState} from 'react'
import '../App.css'
import axios from 'axios'
import Extraction from '../Tables/Extraction'

const Extractionform = () => {
 
    const [inputValues, setInputValues] = useState({
      batchId:'', 
      fileName: '',
      numOfFields: '',
      typeofFile:'',
      delimiter:'',
      sequence:'',
      predecessor:'',
      normalizationConfiguration:'',
      programName:''
    });

    const{batchId,fileName,numOfFields,typeofFile,delimiter,sequence,predecessor,normalizationConfiguration,programName}=inputValues

    const handleInputChange = (e) => {
      setInputValues({...inputValues,[e.target.name]:e.target.value})

    };
    
    const handleSubmit = e => {
      e.preventDefault();

    const data = {
      batchId: batchId,
      fileName: fileName,
      // tableName: tableName,
      numOfFields: numOfFields,
      typeofFile: typeofFile,
      delimiter: delimiter,
      sequence:sequence,
      predecessor:predecessor,
      normalizationConfiguration:normalizationConfiguration,
      programName:programName

    };
      
      axios.post('http://localhost:5241/api/ExtractionConfiguration', data)
        .then(response => {setInputValues(response.data)})
        .catch(error => {console.error(error)});       
        
    };     

  return (
    <div className='row m-5 '>   
    <center><h2>Extraction Configuration</h2></center>    
      <div className=" col m-5">
        <form className='formtransparent form-control' onSubmit={handleSubmit}>  
          <div className=''>
            <div className='row mt-2 ' >
              <div><lable><strong>BatchID:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='BatchId'name='batchId' value={batchId} onChange={handleInputChange}/>
            </div>             
            <div className='mt-2 ' >
              <div><lable><strong>FileName:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='FileName'name='fileName' value={fileName} onChange={handleInputChange}/>
            </div>

          

            <div className='mt-2'>
              <div><lable><strong>Num_Of_Fields:</strong></lable></div>
              <input className='form-control' type={'number'} placeholder='Num_Of_Fields' name='numOfFields' value={numOfFields} onChange={handleInputChange}/>
            </div>

            <div className='mt-2'>
              <div><lable><strong>Type_Of_File:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='typeofFile' name='typeofFile' value={typeofFile}  onChange={handleInputChange}/>
            </div>  

            <div className='mt-2'>
              <div><lable><strong>Dekimiter:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='Delimiter' name='delimiter' value={delimiter} onChange={handleInputChange}/>
            </div>  

            <div className='mt-2'>
              <div><lable><strong>Sequence:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='sequence' name='sequence' value={sequence}  onChange={handleInputChange}/>
            </div>  

            <div className='mt-2'>
              <div><lable><strong>Predecessor:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='Predecessor' name='predecessor' value={predecessor} onChange={handleInputChange}/>
            </div>  

            <div className='mt-2'>
              <div><lable><strong>Normalization:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='normalizationConfiguration' name='normalizationConfiguration' value={normalizationConfiguration}  onChange={handleInputChange}/>
            </div>  

            <div className='mt-2'>
              <div><lable><strong>ProgramName:</strong></lable></div>
              <input className='form-control' type={'text'} placeholder='ProgramName' name='programName' value={programName} onChange={handleInputChange}/>
            </div>    

            <div className='row mt-1 justify-content-center'>
              <div className=' ml-5 col-6 '>
                <button type='submit' className='btn btn-warning form-control'>Submit</button>
              </div>
            </div>

          </div>
        </form>   
      </div>
      <div className="col">
        <div className=''>
          <Extraction/>
        </div>            
      </div>          
    </div>
  )
}
export default Extractionform