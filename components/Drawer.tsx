import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { FC } from 'react'
import { BsCartFill } from 'react-icons/bs'
import ItemsDrawer from "./ItemsDrawer"

const DrawerNavBar: FC<Drawer> = ({ setOpen, open, cart, setCart }) => {

    return (
        <>
            <Drawer
                isOpen={open}
                placement='right'
                size={'lg'}
                onClose={() => setOpen(false)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader display={'flex'} alignItems={'center'} gap={3} fontSize={'30px'}><Icon as={BsCartFill} w={10} h={10}></Icon>Cart</DrawerHeader>
                    <DrawerBody>
                        <Flex gap={5} flexDirection={'column'}>
                            {cart.map((item: Items) => {
                                return <ItemsDrawer key={item.id} items={item} cart={cart} setCart={setCart} />
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