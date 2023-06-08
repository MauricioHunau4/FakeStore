import { Box, Flex, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

//Borrar esa verga y poner Zustand

const ItemsDrawer: FC<ItemsProps> = ({ cartTotal, item }) => {
    const itemValue = item?.item
    console.log(item)
    console.log(cartTotal)
    const deleteItem = (element: Items | undefined) => {

    }

    const addRest = (rest: string) => {

    }

    return (
        <Box key={itemValue?.id} rounded={'lg'} m={'auto'} position={'relative'} bg={useColorModeValue('#802C6E', '#b7b7b7')}>
            <Flex gap={5} alignItems={'center'} m={3} >
                <Image rounded={'lg'} alt={itemValue?.title} w={20} h={20} src={itemValue?.image} />
                <Flex flexDirection={'column'} w={'80%'}>
                    <Text fontSize={{ base: '3xl', md: 'md' }} fontWeight={500} color={useColorModeValue('white', 'black')}>{itemValue?.title}</Text>
                    <Text fontSize={{ base: '2xl', md: 'sm' }} h={10} overflow={'hidden'} textOverflow={'ellipsis'} color={useColorModeValue('white', 'black')}>{itemValue?.description.split('.')[0]}.</Text>
                </Flex>
                <IconButton position={'absolute'} color={useColorModeValue('white', 'black')} bg={'transparent'} top={0} right={0} aria-label='Delete Item' icon={<BsFillTrash3Fill />} onClick={() => deleteItem(itemValue)}></IconButton>
                <Flex flexDirection={'column'} alignSelf={'flex-end'}>
                    <Flex alignItems={'center'}>
                        <IconButton size={'sm'} color={useColorModeValue('white', 'black')} bg={'transparent'} aria-label='Delete Item' icon={<AiOutlineMinus />} onClick={() => addRest('-')} />
                        <Text textAlign={'right'} color={useColorModeValue('white', 'black')}>x{ }</Text>
                        <IconButton size={'sm'} color={useColorModeValue('white', 'black')} bg={'transparent'} aria-label='Delete Item' icon={<AiOutlinePlus />} onClick={() => addRest('+')} />
                    </Flex>
                    <Text fontSize='2xl' textAlign={'right'} fontWeight={600} color={useColorModeValue('white', 'black')}>${itemValue?.price && item ? itemValue.price * item.countValue : 0} </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ItemsDrawer