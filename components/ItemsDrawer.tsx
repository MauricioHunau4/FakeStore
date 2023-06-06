import { Box, Flex, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

//Borrar esa verga y poner Zustand

const ItemsDrawer: FC<ItemsProps> = ({ elements, cart, setCart }) => {
    const [element, setElement] = useState(elements.element)
    const [countValue, setCountValue] = useState(elements.countValue)

    const deleteItem = (element: Items) => {
        const updatedItems = cart.filter((items: Items) => items.id !== element.id)
        setCart(updatedItems)
    }  

    const addRest = (rest: string) =>{
        if(rest === '-') {
            if(countValue - 1 <= 0) deleteItem(element)
            setCountValue(current => current - 1)
        }
        else setCountValue(current => current + 1)
    }

    return (
        <Box key={element.id} rounded={'lg'} m={'auto'} position={'relative'} bg={useColorModeValue('#802C6E', '#b7b7b7')}>
            <Flex gap={5} alignItems={'center'} m={3} >
                <Image rounded={'lg'} alt={element.title} w={20} h={20} src={element.image} />
                <Flex flexDirection={'column'} w={'80%'}>
                    <Text fontSize={{ base: '3xl', md: 'md' }} fontWeight={500} color={useColorModeValue('white', 'black')}>{element.title}</Text>
                    <Text fontSize={{ base: '2xl', md: 'sm' }} h={10} overflow={'hidden'} textOverflow={'ellipsis'} color={useColorModeValue('white', 'black')}>{element.description.split('.')[0]}.</Text>
                </Flex>
                <IconButton position={'absolute'} color={useColorModeValue('white', 'black')} bg={'transparent'} top={0} right={0} aria-label='Delete Item' icon={<BsFillTrash3Fill />} onClick={() => deleteItem(element)}></IconButton>
                <Flex flexDirection={'column'} alignSelf={'flex-end'}>
                    <Flex alignItems={'center'}>
                        <IconButton size={'sm'} color={useColorModeValue('white', 'black')} bg={'transparent'} aria-label='Delete Item' icon={<AiOutlineMinus />} onClick={()=>addRest('-')}/>
                        <Text textAlign={'right'} color={useColorModeValue('white', 'black')}>x{countValue}</Text>
                        <IconButton size={'sm'} color={useColorModeValue('white', 'black')} bg={'transparent'}  aria-label='Delete Item' icon={<AiOutlinePlus />} onClick={()=>addRest('+')}/>
                    </Flex>
                    <Text fontSize='2xl' textAlign={'right'} fontWeight={600} color={useColorModeValue('white', 'black')}>${element.price * countValue} </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ItemsDrawer