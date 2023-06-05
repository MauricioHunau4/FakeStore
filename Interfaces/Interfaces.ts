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

interface ItemsProps {
    items: Items,
    setCart: any,
    cart: never[]
}

interface NavBar {
    setOpen: any,
}

interface Drawer {
    open: boolean,
    setOpen: any,
    cart: never[],
    setCart: any,
}