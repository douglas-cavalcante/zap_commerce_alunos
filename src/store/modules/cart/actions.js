// {id, title, price, description, image}

export const addProductToCart = (book) => {
  return {
    type: 'ADD_BOOK_TO_CART',
    payload: {
      book
    }
  }
}

export const removeBook = (id) => {
  return {
    type: 'REMOVE_BOOK_TO_CART',
    payload: {
      id
    }
  }
}

export const updateAmout = (id, amount) => {
  console.log('ENTREI AQUI')
  return {
    type: 'UPDATE_BOOK_AMOUNT',
    payload: {
      id,
      amount
    }
  }
}