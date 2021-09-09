// {id, title, price, description, image}

export const addProductToCart = (book) => {
 console.log(book)
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      book
    }
  }
}