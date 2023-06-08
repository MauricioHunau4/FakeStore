import { create } from 'zustand';



export const useStoreCart = create<Cart>()((set) => ({
    cart: [],
    add: (cart) => set((state) => ({ cart: [...state.cart, cart] })),
    remove: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }))
}))
