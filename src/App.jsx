// import "./App.css";
import React from "react";
 import Home  from "./page/Home";
 import Search  from "./page/Search";
 import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as  Router,Routes,Route } from "react-router-dom";
import Gif from "./page/Gif";

const App = ()=>{
 return ( 
         
             <Router>
             <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/search" element={<Search />} />
               <Route path="/GIF" element={<Gif />} />
               <Route path="/visits" element={<Search />} />
             </Routes>
           </Router>
          
          )
}

export default App;