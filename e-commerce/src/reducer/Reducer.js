export const reducer = (state, action) => {
  switch (action.type) {
    case "API_SUCCESS":
      const featureData = action.payload.filter((el) => {
        return el.featured === true;
      });
      return {
        ...state,
        products: action.payload,
        featuredProducts: featureData,
        isLoading: false,
      };

    case "API_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
        return state
  }
};
