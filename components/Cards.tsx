import {
  useColorModeValue,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FC } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useStoreCart } from '../store/store';
import { useCart } from '@/app/hooks/useCart';

const Cards = ({ items }: ItemsPropsCards) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { addToCart } = useCart()
  const checkProductInCart = (product: Items) => ((item: Items) => item.id === product.id)
  //cabmiar icono si el producto ya se encuentra
  //Hacer categorias
  //Hacer filtros
  const handleHover = () => {
    setIsHovered(!isHovered);
  };


  return (
    <Flex
      direction={'column'}
      role={'group'}
      gap={'20px'}
      p={6}
      maxW={'300px'}
      justifyContent={'space-between'}
      minW={'300px'}
      bg={useColorModeValue('#802C6E', '#b7b7b7')}
      boxShadow={'2xl'}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
    >
      <Image
        rounded={'lg'}
        height={200}
        cursor={'pointer'}
        width={200}
        aspectRatio={'16/9'}
        alt={items.title}
        objectFit={'cover'}
        mx={'auto'}
        src={items.images[0]}
        transform={isHovered ? 'scale(1.1)' : 'none'}
        transition='transform ease-in 0.2s'
      />
      <Flex align={'center'} direction={'column'} justifyContent={'space-between'} flexGrow={1}>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={useColorModeValue('white', 'black')}>
          {items.title}
        </Heading>
        <Text fontWeight={800} fontSize={'xl'} color={useColorModeValue('white', 'black')}>
          ${items.price}
        </Text>
        <Flex direction={'row'} align={'center'} position={'relative'} justifyContent={'space-between'} w={'full'}>
          <Flex alignItems={'baseline'} gap={'10px'}>
            <Text fontWeight={800} fontSize={'xl'} color={useColorModeValue('white', 'black')}>
              {items.rating}
            </Text>
            <Icon as={StarIcon} color={useColorModeValue('yellow', 'black')}></Icon>
          </Flex>
          <Button bg={useColorModeValue('#B7B7B7', '#1A202C')} color={useColorModeValue('black', 'white')} _hover={{ bg: useColorModeValue('#802C6E', '#802C6E') }} onMouseDown={() => { setClicked(true) }} onMouseUp={() => { setClicked(false) }} onClick={() => addToCart(items)}>
            <Text color={!clicked ? 'white' : 'black'}> Add to Cart </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}


export default Cards