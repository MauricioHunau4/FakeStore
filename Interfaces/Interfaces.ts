interface Items {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock:number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface StoreState {
    items: { item: Items; count: number }[];
    addItem: (item: any) => void;
    removeItem: (item: any) => void;
    removeOneItem: (item: any) => void;
}

interface ItemsPropsCards {
    items: Items,
}

interface ItemsProps {
    item: StoreState['items'][number]
    addItem: (item: Items) => void,
    removeItem: (item: Items) => void
    removeOneItem: (item: Items) => void
}

interface NavBar {
    setOpen: any,
}

interface Drawer {
    open: boolean,
    setOpen: any,
}