'use client'
import Cards from '@/components/Cards'
import Fake from '@/fakeAPI/fake.json'
import { Flex } from '@chakra-ui/react'


const Home = () => {
  return (
    <main>
      <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'80px'} my={10} w={'70%'} mx={'auto'} >
        {Fake.map((items) => {
          return <Cards key={items.id} items={items} />
        })}
      </Flex>
    </main>
  )
}

export default Home