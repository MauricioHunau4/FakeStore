'use client'
import NavBar from '@/components/NavBar'
import Cards from '@/components/Cards'
import Fake from '@/fakeAPI/fake.json'
import { Flex, Grid, useDisclosure } from '@chakra-ui/react'
import DrawerNavBar from '@/components/Drawer'
import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState([])

  return (
    <>
      <NavBar setOpen={setOpen} />
      <DrawerNavBar setOpen={setOpen} open={open} cart={cart} setCart={setCart} />
      <main>
        <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'80px'} my={10} w={'70%'} mx={'auto'} >
          {Fake.map((items) => {
            return <Cards key={items.id} items={items} cart={cart} setCart={setCart} />
          })}
        </Flex>
      </main>
    </>
  )
}

export default Home