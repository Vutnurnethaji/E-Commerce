const CartReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            let arr=[...state.cart].find((el)=>{
                return el.id===action.payload.id
            })
            if(arr){
                return{
                    ...state,
                    cart:[...state.cart].map((el)=>{
                        if(el.id===action.payload.id){
                            return({...el,count:el.count+action.payload.count})
                        }
                        else{
                            return el
                        }
                    })
                }
            }else{
                return {
                    ...state,
                    cart:[...state.cart,action.payload]
                }
            }

        case 'DELETE_FROM_CART':
            return {
                ...state,
                cart:[...state.cart.filter((el)=>el.id!==action.payload.id)]
            }

        case 'CLEAR_CART':
            return{
                ...state,
                cart:[]
            }

        case 'UPDATING_COUNT':
            return{
                ...state,
                cart:[...state.cart.map((el)=>{
                    if(el.id==action.payload.id){
                        return {
                            ...el,
                            count:action.payload.countVal
                        }
                    }
                    return el
                })]
            }

        case 'UPDATE_TOTAL_ITEMS':
            let numC=state.cart.reduce((prev,el)=>{
                return prev+el.count
             },0)
             let numA=state.cart.reduce((prev,el)=>{
                return prev+(el.count*el.singleProduct.price)
             },0)
             console.log(numA,'to')
           return{
            ...state,
            totalItems:numC,
            totalAmount:numA
           }
        default:
            return state
    } 
}

export default CartReducer