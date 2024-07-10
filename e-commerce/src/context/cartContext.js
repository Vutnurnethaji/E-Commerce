import { createContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
import { type } from "@testing-library/user-event/dist/type";

export const cartContext = createContext();

const getLocalCart=()=>{
  let localItem=JSON.parse(localStorage.getItem('amazonStore'))
  if(localItem){
    return localItem
  }
  else{
    return []
  }
}

const initialState={
    cart:getLocalCart(),
    totalAmount:'',
    totalItems:'',
    shippingFee:50000
}

export const CartContextProvider = ({ children }) => {
   
    const [state, dispatch]=useReducer(CartReducer,initialState);

    useEffect(()=>{
      localStorage.setItem('amazonStore',JSON.stringify(state.cart));
      dispatch({type:'UPDATE_TOTAL_ITEMS'})
    },[state.cart])

   const addingToCart=({singleProduct,color, count, id})=>{
        dispatch({type:'ADD_TO_CART',payload:{singleProduct,color,count, id}})
    }

  const deleteFromCart=(id)=>{
      dispatch({type:'DELETE_FROM_CART', payload:{id}})
  }

  const updatingCount=({id, countVal})=>{
      dispatch({type:'UPDATING_COUNT', payload:{id,countVal}})
  }

  const clearCart=()=>{
     localStorage.clear('amazonStore');
     dispatch({type:'CLEAR_CART'})
  }

  return (
    <cartContext.Provider value={{addingToCart,state, deleteFromCart, clearCart,updatingCount}}>
        {children}
    </cartContext.Provider>
  );
};
