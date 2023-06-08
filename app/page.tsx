'use client'
import NavBar from '@/app/components/NavBar'
import Cards from '@/app/components/Cards'
import Fake from '@/fakeAPI/fake.json'
import { Flex, Grid, useDisclosure } from '@chakra-ui/react'
import DrawerNavBar from '@/app/components/Drawer'
import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavBar setOpen={setOpen} />
      <DrawerNavBar setOpen={setOpen} open={open} />
      <main>
        <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'80px'} my={10} w={'70%'} mx={'auto'} >
          {Fake.map((items) => {
            return <Cards key={items.id} items={items} />
          })}
        </Flex>
      </main>
    </>
  )
}

export default Home