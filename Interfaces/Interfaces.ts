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

interface Elements{
    countValue: number
    element: Items

}

interface ItemsPropsCards {
    items: Items,
    setCart: any,
    cart: never[]
}

interface ItemsProps {
    elements: Elements,
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