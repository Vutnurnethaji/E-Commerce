import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducer/Reducer";
import { type } from "@testing-library/user-event/dist/type";

export const appContext= React.createContext();

const intialState={
    isLoading:false,
    isError:'',
    products:[],
    featuredProducts:[],
    isSingleLoading:false,
    singleProduct:{},
    isSingleError:''
}

const AppProvider=({children})=>{

    const [state, dispatch]= useReducer(reducer, intialState)

    const API = "https://api.pujakaitem.com/api/products";

    const getProducts=async(url)=>{
        dispatch({type:'API_LOADING'})
     try {
          const response=await axios.get(url)
          const data=await response.data;
          dispatch({type:'API_SUCCESS',payload:data})
     } catch (error) {
        dispatch({type:'API_FAILURE', payload:'Something went wrong'})
     }
    }

    const getSingleProduct=async(url)=>{
      dispatch({type:'API_LOADING_SINGLE'})
   try {
        const response=await axios.get(url)
        const data=await response.data;
        dispatch({type:'API_SUCCESS_SINGLE',payload:data})
   } catch (error) {
      dispatch({type:'API_FAILURE_SINGLE', payload:'Something went wrong'})
   }
  }

    useEffect(()=>{
       getProducts(API)
    },[])
    return <>
       <appContext.Provider value={{state,getSingleProduct}}>
         {children}
       </appContext.Provider>
    </>
}

export default AppProvider