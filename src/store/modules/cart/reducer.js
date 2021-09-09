const INITIAL_STATE = {
  items: []
}

const cart = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case 'ADD_BOOK_TO_CART':

      const { book } = action.payload

      return {
        ...state,
        items: {
          book
        }
      }

    default:
      console.log('nao fiz nada')
      return state
  }

}



export default cart;