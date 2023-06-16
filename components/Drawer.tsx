import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import { FC, useState, useEffect } from 'react'
import { BsCartFill } from 'react-icons/bs'
import ItemsDrawer from "./ItemsDrawer"
import { useCart } from "@/app/hooks/useCart"

const DrawerNavBar: FC<Drawer> = ({ setOpen, open }) => {
    const [total, setTotal] = useState<number>(0)
    const { cart } = useCart()

    useEffect(() => {
        let totalPrice = 0;

        cart.forEach((item: Items) => {
            totalPrice += (item.price * item.quantity)
        });
        setTotal(totalPrice)
    }, [cart])

    return (
        <>
            <Drawer
                isOpen={open}
                placement='right'
                size={'sm'}
                onClose={() => setOpen(false)}
            >
                <DrawerOverlay />
                <DrawerContent bg={'#23272B'}>
                    <DrawerCloseButton />
                    <DrawerHeader display={'flex'} alignItems={'center'} gap={3} fontSize={'30px'}><Icon as={BsCartFill} w={10} h={10}></Icon>Cart</DrawerHeader>
                    <DrawerBody>
                        <Flex gap={5} flexDirection={'column'}>
                            {cart && cart.map((item: Items) => {
                                return <ItemsDrawer key={item?.id} items={item} />
                            })}
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={'4xl'}>Total ${total.toFixed(2)}</Text>
                        <Button bg={useColorModeValue('#802C6E', '#b7b7b7')} color={useColorModeValue('white', 'black')} onClick={() => setOpen(false)}>Continue</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}
export default DrawerNavBar