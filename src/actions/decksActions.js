export const getDecks = () => {
  return(dispatch) => {
    dispatch({type: "LOADING_DECKS"})
    return fetch('/decks')
    .then(resp => resp.json())
    .then(decks =>
      dispatch({type: "DECKS_LOADED", payload: decks})
    )
  }
}

export const addDeck = (deck) => {
  return(dispatch) => {
    dispatch({type: "ADD_DECK"}, deck)
    return fetch(`/decks`, {
      method: 'POST',
      body: JSON.stringify(deck),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(deck => {
      return dispatch({type: "DECK_ADDED", payload: deck})
    })
  }
}
