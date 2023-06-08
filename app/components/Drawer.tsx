import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { FC, useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import ItemsDrawer from "./ItemsDrawer"
import { useStoreCart } from '@/app/store/store'

const DrawerNavBar: FC<Drawer> = ({ setOpen, open }) => {
    const cartTotal = useStoreCart((state) => state)


    //Cambiar funcionpara que este contado cada item con esta funcion en cartTotalcart
    //arreglar esto
    const ItemsSet = (cartTotal: Items[]) => {
        const count: any = {};
        let items: any = []
        cartTotal?.forEach(element => {
            const key = JSON.stringify(element);
            if (count[key]) {
                count[key]++;
            } else {
                count[key] = 1;
            }
        });
        const keys = Object.keys(count);
        keys.forEach(key => {
            const element = JSON.parse(key)
            const countValue = count[key]
            items.push({ countValue, element })
        })

        return items
    }

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
                            {ItemsSet(cartTotal?.cart).map((item: Elements | undefined) => {
                                return <ItemsDrawer key={item?.item?.id} item={item} cartTotal={cartTotal} />
                            })}
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button colorScheme='blue' onClick={() => setOpen(false)}>Go to pay</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}
export default DrawerNavBar