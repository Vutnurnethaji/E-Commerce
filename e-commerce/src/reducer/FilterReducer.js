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
      console.log("in get sort", selRefVal);
      return {
        ...state,
        sortValue: selRefVal,
      };

    case "SORT_PRODUCT":
      const prods = [...action.payload];
      let filProds;
      if (state.sortValue === "a-z") {
        filProds = prods.sort((a, b) => {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
      } else if (state.sortValue === "z-a") {
        filProds = prods.sort((a, b) => {
          return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
        });
      } else if (state.sortValue === "asc") {
        filProds = prods.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        filProds = prods.sort((a, b) => {
          return b.price - a.price;
        });
      }

      return {
        ...state,
        filter_products: filProds,
      };

    case "GET_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case "LOAD_M_PRICE":
      return {
        ...state,
        filters: {
          ...state.filters,
          maxPrice: action.payload,
          price: action.payload,
        },
      };
    case "GET_FILTER_PRODS":
      const { text, category, company, colors, price, minPrice, maxPrice } =
        state.filters;
      let arr = [...state.all_products];
      if (text) {
       arr = arr.filter((cur) => {
          return cur.name
            .toLowerCase()
            .includes(state.filters.text.toLowerCase());
        });
      }
      if(category!=='all'){
        arr= arr.filter((cur) => {
              return cur.category === category;
            });
      }
      if(company !== 'all'){
        arr =arr.filter((cur) => {
              return cur.company === company;
            });
      }
      if(colors !== 'all'){
        arr= arr.filter((cur) => {
              return cur.colors.includes(colors);
            });
      }
      if(price){
        arr=arr.filter((cur) => {
              return (cur.price/100) <= price
            });
      }
      return {
        ...state,
        filter_products: arr,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          minPrice: 0,
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default FilterReducer;
