export default (state, action, entityName, actions) => {
  switch (action.type) {
    case actions.clear: {
      return {
        ...state,
        [entityName]: {},
        successfulResponse: null,
        loading: false,
        errorMessage: '',
        showMessage: false,
      }

    }
    case actions.sended: {
      return {
        ...state,
        [entityName]: action.payload,
        errorMessage: '',
        loading: true,
        showMessage: false
      }
    }
    case actions.error: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        showMessage: true
      }
    }
    case actions.success: {
      return {
        ...state,
        successfulResponse: action.payload,
        loading: false,
      }
    }
    default:
      return state;
  }
}