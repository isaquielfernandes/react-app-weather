
const initialState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}