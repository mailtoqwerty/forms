import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import ConfigurationForm from './Forms/ConfigurationForm';
import Validationform from './Forms/Validationform';
import Extractionform from './Forms/Extractionform';
import PathForm from './Forms/PathForm';
import ConfigNormalization from './Tables/ConfigNormalization';
import Records from './Records';
// import GenerateSchema from './Staging Tables/GenerateSchema';
import NormalizationConfigHeader from './Tables/NormalizationConfigHeader';
import Dmdashboard from './Dmdashboard';
import TotalRecords from './TotalRecords';
import Exceptions from './Exceptions';
import SuccessRecords from './SuccessRecords';
import TotalExceptions from './TotalExceptions';


const App = () => {
  return (
    <div >      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route path="/" element={<Dmdashboard />}/>   
            <Route path="extraction" element={<Extractionform />}/>               
            <Route path="fieldlevel" element={<Validationform />}/>
            <Route path="transformation" element={<ConfigurationForm />}/>             
            <Route path="path" element={<PathForm/>}/>  
            <Route path="records" element={<Records/>}/>
            <Route path="totalexceptions" element={<TotalExceptions/>}/>
            <Route path="totalrecords" element={<TotalRecords/>}/>
            <Route path="successrecords" element={<SuccessRecords/>}/>
            <Route path="normalizationdetails" element={<ConfigNormalization/>}/> 
            <Route path="normalizationheader" element={<NormalizationConfigHeader/>}/> 
            {/* <Route path="generateschema" element={<GenerateSchema/>}/>       */}
            <Route path="exceptions" element={<Exceptions/>}/> 
          </Route>                 
        </Routes>
      </BrowserRouter >     
     
    </div>
  );
}   
export default App;