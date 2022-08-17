import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { ChakraProvider } from '@chakra-ui/react'
// import {configureStore} from '@reduxjs/toolkit'
// import { Provider } from "react-redux";
// import gifReducer from './features/Save'

// const store = configureStore({
//     /*reducer: FUNCTION THAT TAAKES INFORMATION OF THE CURRENT STATE*/
//     reducer:{
//       gif:gifReducer  
//     }

// })

// import {creates}




ReactDOM.render(
                            // <Provider store={store}>
                                < ChakraProvider >
                                <App />
                                </ChakraProvider>
                            // </Provider>

,document.getElementById("root"))
