import { createContext, useContext, useEffect, useReducer } from "react";
import { appContext } from "./productContext";
import reducer from "../reducer/FilterReducer";
import { type } from "@testing-library/user-event/dist/type";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  gridView:true,
  sortValue:'a-z',
  filters:{
    text:'',
    category:'all',
    company:'all',
    colors:'all',
    minPrice:0,
    maxPrice:0,
    price:0
  }
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { state:mainState } = useContext(appContext);
  
  const arrPrice=[...mainState.products].map((el)=>el.price).sort((a,b)=>a-b);
  const maxCost=arrPrice[arrPrice.length-1]/100

   
  useEffect(()=>{
    dispatch({type:'LOAD_M_PRICE', payload:maxCost})
    dispatch({type:'LOAD_SUCCESS', payload:mainState.products})
  },[mainState]);

  useEffect(()=>{
    dispatch({type:'SORT_PRODUCT', payload:mainState.products})
  },[state.sortValue])

  useEffect(()=>{
    dispatch({type:'GET_FILTER_PRODS'})
  },[state.filters])

  const gridViewFunc=()=>{
    dispatch({type:"GRID_VIEW", payload:true})
  }
  const listViewFunc=()=>{
    dispatch({type:"GRID_VIEW", payload:false})
  }

  const sortValueFunc =()=>{
    dispatch({type:'GET_SORT'})
  }

  const inputChangeValFunc =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    dispatch({type:'GET_FILTER', payload:{name,value}})
  }

  const clearFilter=()=>{
    dispatch({type:'CLEAR_FILTER'})
  }

 return <FilterContext.Provider value={{...state,gridViewFunc,listViewFunc, sortValueFunc, inputChangeValFunc, clearFilter}}>{children}</FilterContext.Provider>;
};

export default FilterContextProvider;
