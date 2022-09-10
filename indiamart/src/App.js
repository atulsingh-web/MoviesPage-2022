import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";


import Nevbar from "./components/Nevbar";

import Contact from "./components/Contact";



// import Link from "./components/Link";



function App() {
  return (
    <>
       <Router>
       <Nevbar/>
             
        <Routes>
      
          
         
          <Route path="/Contact" element={<Contact/>}/>
      

        </Routes>
      </Router>
       
    </>
  );
}

export default App;
