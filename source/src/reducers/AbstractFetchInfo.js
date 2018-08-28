export default (state, action, entityName, actions) => {
  switch (action.type) {
    case actions.sended: {
      return {
        ...state,
        errorMessage: '',
        loading: true,
        showMessage: false,
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
        [entityName]: action.payload,
        loading: false,
        showMessage: false,
      }
    }
    default:
      return state;
  }
}