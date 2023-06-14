'use client'
import Cards from '@/components/Cards'
import Fake from '@/fakeAPI/fake.json'
import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
import DrawerNavBar from '@/components/Drawer'

const Home = () => {
  const [open, setOpen] = useState(false)
  return (<>
    <NavBar setOpen={setOpen} />
    <DrawerNavBar setOpen={setOpen} open={open} />
    <main>
      <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'80px'} my={10} w={'70%'} mx={'auto'} >
        {Fake.products.slice(0, 10).map((items) => {
          return <Cards key={items.id} items={items} />
        })}
      </Flex>
    </main>
  </>
  )
}

export default Home