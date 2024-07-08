const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_SUCCESS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GRID_VIEW":
      return {
        ...state,
        gridView: action.payload,
      };

    case "GET_SORT":
      const selRef = document.getElementById("sort");
      const selRefVal = selRef.options[selRef.selectedIndex].value;
      console.log('in get sort', selRefVal)
      return {
        ...state,
        sortValue: selRefVal,
      };

    case 'SORT_PRODUCT':
      const prods=[...action.payload]
      let filProds;
      if(state.sortValue==='a-z'){
        filProds=prods.sort((a,b)=>{
          return  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        })
      }
      else if(state.sortValue==='z-a'){
        filProds=prods.sort((a,b)=>{
          return  b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        })
      }
      else if(state.sortValue==='asc'){
        filProds=prods.sort((a,b)=>{
          return a.price-b.price
        })
      }
      else{
        filProds=prods.sort((a,b)=>{
          return b.price-a.price
        })
      }

      console.log(filProds,"in sortPro")
      return{
        ...state,
        filter_products:filProds
      }

    default:
      return state;
  }
};

export default FilterReducer;
