import { create } from 'zustand';

export const useStoreCart = create<StoreState>((set) => ({
    items: [],
    addItem: (item: any) => {
        set((state) => {
            const existingItem = state.items.find((i) => i.item === item);
            if (existingItem) {
                existingItem.count += 1;
                return { items: [...state.items] };
            } else {
                return { items: [...state.items, { item, count: 1 }] };
            }
        });
    },
    removeItem: (item: any) => {
        set((state) => {
            const updatedItems = state.items.filter((i) => i.item !== item);
            return { items: updatedItems };
        });
    },
    removeOneItem: (item: any) => {
        set((state) => {
            const updatedItems = state.items.map((i) => {
                if (i.item === item) {
                    return { ...i, count: i.count - 1 };
                }
                return i;
            });
            return { items: updatedItems };
        });
    },
}));
