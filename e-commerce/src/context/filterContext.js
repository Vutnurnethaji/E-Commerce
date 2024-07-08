import { createContext, useContext, useEffect, useReducer } from "react";
import { appContext } from "./productContext";
import reducer from "../reducer/FilterReducer";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  gridView:true,
  sortValue:'a-z'
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { state:mainState } = useContext(appContext);
   
  useEffect(()=>{
    dispatch({type:'LOAD_SUCCESS', payload:mainState.products})
  },[mainState]);

  useEffect(()=>{
    console.log(state.sortValue,'inUseEffect')
    dispatch({type:'SORT_PRODUCT', payload:mainState.products})
  },[state.sortValue])

  const gridViewFunc=()=>{
    dispatch({type:"GRID_VIEW", payload:true})
  }
  const listViewFunc=()=>{
    dispatch({type:"GRID_VIEW", payload:false})
  }

  const sortValueFunc =()=>{
    dispatch({type:'GET_SORT'})
  }

 return <FilterContext.Provider value={{...state,gridViewFunc,listViewFunc, sortValueFunc}}>{children}</FilterContext.Provider>;
};

export default FilterContextProvider;
