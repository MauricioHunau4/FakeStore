import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '@/app/reducers/cart'

export const CartContext = createContext<any>(null)

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product: Items) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeOneFromCart = (product: Items) => dispatch({
        type: 'REMOVE_ONE_FROM_CART',
        payload: product
    })

    const removeFromCart = (product: Items) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart, removeOneFromCart }
}

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider({ children }: any) {
    const { state, addToCart, removeFromCart, clearCart, removeOneFromCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeOneFromCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}