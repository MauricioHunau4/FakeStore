import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { FC } from 'react'

const ItemsDrawer: FC<ItemsProps> = ({ items }) => {
    return (
        <Box key={items.id} rounded={'lg'} m={'auto'} bg={useColorModeValue('#802C6E', '#b7b7b7')}>
            <Flex gap={5} alignItems={'center'} m={3} >
                <Image rounded={'lg'} alt={items.title} w={20} h={20} src={items.image} />
                <Flex flexDirection={'column'} w={'80%'}>
                    <Text fontSize='3xl' fontWeight={500} color={useColorModeValue('white', 'black')}>{items.title}</Text>
                    <Text fontSize='2xl' color={useColorModeValue('white', 'black')}>{items.description.split('.')[0]}.</Text>
                </Flex>
                <Text fontSize='2xl' fontWeight={600} color={useColorModeValue('white', 'black')}>${items.price} </Text>
            </Flex>
        </Box>
    )
}

export default ItemsDrawer