interface Items {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

interface Elements {
    countValue: number
    item: Items | undefined
}

interface Cart {
    cart: Items[],
    add: (item: Items) => void,
    remove: (id: number) => void
}

interface ItemsPropsCards {
    items: Items,
}

interface ItemsProps {
    item: Elements | undefined,
    cartTotal: Cart,
}

interface NavBar {
    setOpen: any,
}

interface Drawer {
    open: boolean,
    setOpen: any,
}