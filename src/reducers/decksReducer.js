export default (state={decks: [], loading: false}, action) => {
  switch(action.type){
    case "LOADING_DECKS":
      return {
        ...state,
        loading:true
      }

    case "DECKS_LOADED":
      return {
        ...state,
        decks: action.payload,
        loading: false
      }

    case "ADD_DECK":
      return {
        ...state,
        loading:true
      }

    case "DECK_ADDED":
      return {
        ...state,
        decks: [...state.decks, action.payload],
        loading: false
      }


    default:
      return state
  }
}
