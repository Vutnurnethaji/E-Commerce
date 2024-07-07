import React, { useEffect } from "react";
import axios from "axios";

export const appContext= React.createContext();

const AppProvider=({children})=>{

    const API = "https://api.pujakaitem.com/api/products";

    const getProducts=async(url)=>{
       const response=await axios.get(url)
       const data=await response.data;
       console.log(data)
    }

    useEffect(()=>{
       getProducts(API)
    },[])
    return <>
       <appContext.Provider value={{name:'nethi'}}>
         {children}
       </appContext.Provider>
    </>
}

export default AppProvider