import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { FC, useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import ItemsDrawer from "./ItemsDrawer"

const DrawerNavBar: FC<Drawer> = ({ setOpen, open, cart, setCart }) => {

    const ItemsSet = (cart: never[]) => {
        const count:any = {};
        let items: any = []
        cart.forEach(element => {
            const key = JSON.stringify(element); // Convertir el objeto en una cadena JSON como clave del objeto de conteo
            if (count[key]) {
                count[key]++;
            } else {
                count[key] = 1;
            }
        });
        const keys = Object.keys(count);
        keys.forEach(key=>{
            const element = JSON.parse(key)
            const countValue = count[key]
            items.push({countValue, element})
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
                            {ItemsSet(cart).map((item: Elements) => {
                                return <ItemsDrawer key={item.element.id} elements={item} cart={cart} setCart={setCart} />
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