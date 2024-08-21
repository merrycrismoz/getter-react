export const addCard = (card) => {

  return(dispatch) => {

    dispatch({type: "ADD_CARD"}, card)


    return fetch(`/cards`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(card => {

      return dispatch({type: "CARD_ADDED", payload: card})
    })

  }

}

export const deleteCard = (id) => {
  console.log(6)
  return (dispatch) => {
    dispatch({type:"DELETE_CARD"})
    console.log(7)
    return fetch(`/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(8)
    .then(() => {
      console.log(9)
      dispatch({type: "CARD_DELETED", payload:id})
    })
    console.log(10)
  }
}
