import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export interface Items {
    id: number,
    title: string,
    price: number,
    description:string,
    image: string,
    rating:{
        rate: number,
        count: number
    }
  }

  export default function ProductSimple({items}: Items) {
    return (
         
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'300px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url()`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={200}
              width={200}
              objectFit={'cover'}
              margin={'auto'}
              src={items.image}
            />
          </Box>
          <Stack align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {items.title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                ${items.price}
              </Text>
              <Text fontWeight={800} fontSize={'xl'}>
                {items.rating.rate}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
      
    );
  }