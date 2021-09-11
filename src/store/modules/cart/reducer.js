import { addProductToCart } from "./actions"

const INITIAL_STATE = {
  items: [
  ]
}

const cart = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case 'ADD_BOOK_TO_CART': {
      const { book } = action.payload

      // verificar 

      const itemExist = state.items.find(item => item.book.id === book.id)

      if (!itemExist) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              book,
              amount: 1
            }
          ],
        }
      } else {

        const newItems = state.items.map(item => {
          if (item.book.id === itemExist.book.id) {
            return {
              ...item,
              amount: item.amount + 1
            }
          }
          return item
        });

        return {
          ...state,
          items: newItems
        }
      }
    }

    case 'UPDATE_BOOK_AMOUNT': {
      console.log(action.payload)



      const newItems = state.items.map(item => {
        if (item.book.id === action.payload.id) {
          return {
            ...item,
            amount: action.payload.amount
          }
        }
        return item
      });

      return {
        ...state,
        items: newItems
      }

    }

    case 'REMOVE_BOOK_TO_CART': {
      console.log('entreiii')
      const { id } = action.payload

      const newItems = state.items.filter(item => item.book.id !== id)
  
      return {
        ...state,
        items: newItems
      }

    }
    default:
      return state
  }

}



export default cart;