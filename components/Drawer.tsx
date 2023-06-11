import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Text } from "@chakra-ui/react"
import { FC, useState, useEffect } from 'react'
import { BsCartFill } from 'react-icons/bs'
import ItemsDrawer from "./ItemsDrawer"
import { useStoreCart } from '@/store/store'

const DrawerNavBar: FC<Drawer> = ({ setOpen, open }) => {
    const [total, setTotal] = useState(0)
    const items = useStoreCart((state) => state.items);
    const addItem = useStoreCart((state) => state.addItem);
    const removeItem = useStoreCart((state) => state.removeItem);
    const removeOneItem = useStoreCart((state) => state.removeOneItem);

    useEffect(() => {
        let totalPrice = 0;

        items.forEach((item) => {
            totalPrice += item.count * item.item.price;
        });
        setTotal(totalPrice)
    }, [items])

    return (
        <>
            <Drawer
                isOpen={open}
                placement='right'
                size={'sm'}
                onClose={() => setOpen(false)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader display={'flex'} alignItems={'center'} gap={3} fontSize={'30px'}><Icon as={BsCartFill} w={10} h={10}></Icon>Cart</DrawerHeader>
                    <DrawerBody>
                        <Flex gap={5} flexDirection={'column'}>
                            {items.map((item: StoreState['items'][number]) => {

                                return <ItemsDrawer key={item?.item?.id} item={item} removeItem={removeItem} addItem={addItem} removeOneItem={removeOneItem} />
                            })}
                        </Flex>
                    </DrawerBody>
                    {/*   */}
                    <DrawerFooter alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={'4xl'}>Total ${total.toFixed(2)}</Text>
                        <Button colorScheme='blue' onClick={() => setOpen(false)}>Go to pay</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}
export default DrawerNavBar