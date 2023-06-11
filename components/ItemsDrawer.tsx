import { Box, Flex, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'



const ItemsDrawer = ({ item, removeItem, addItem, removeOneItem }: ItemsProps) => {
    const itemValue = item.item

    const deleteItem = (item: StoreState['items'][number]) => {
        removeItem(item.item)
    }

    const restItem = (rest: string) => {
        if (rest === '-' && item.count > 1) removeOneItem(item.item)
    }

    return (<Box rounded={'lg'} m={'auto'} position={'relative'} bg={useColorModeValue('#802C6E', '#b7b7b7')}>
        <Flex gap={5} alignItems={'center'} m={3} >
            <Image rounded={'lg'} alt={itemValue?.title} w={20} h={20} src={itemValue?.image} />
            <Flex flexDirection={'column'} w={'80%'}>
                <Text fontSize={{ base: '3xl', md: 'md' }} fontWeight={500} color={useColorModeValue('white', 'black')}>{itemValue?.title}</Text>
                <Text fontSize={{ base: '2xl', md: 'sm' }} h={10} overflow={'hidden'} textOverflow={'ellipsis'} color={useColorModeValue('white', 'black')}>{itemValue?.description.split('.')[0]}.</Text>
            </Flex>
            <IconButton position={'absolute'} color={useColorModeValue('white', 'black')} bg={'transparent'} top={0} right={0} aria-label='Delete Item' icon={<BsFillTrash3Fill />} onClick={() => deleteItem(item)}></IconButton>
            <Flex flexDirection={'column'} alignSelf={'flex-end'}>
                <Flex alignItems={'center'}>
                    <IconButton size={'sm'} color={useColorModeValue('white', 'black')} bg={'transparent'} aria-label='Delete Item' icon={<AiOutlineMinus />} onClick={() => restItem('-')} />
                    <Text textAlign={'right'} color={useColorModeValue('white', 'black')}>x{item?.count}</Text>
                    <IconButton size={'sm'} color={useColorModeValue('white', 'black')} bg={'transparent'} aria-label='Delete Item' icon={<AiOutlinePlus />} onClick={() => addItem(item.item)} />
                </Flex>
                <Text fontSize='2xl' textAlign={'right'} fontWeight={600} color={useColorModeValue('white', 'black')}>${itemValue?.price && item ? itemValue.price * item.count : 0} </Text>
            </Flex>
        </Flex>
    </Box>

    )
}

export default ItemsDrawer