'use client'
import NavBar from '../components/NavBar'
import Cards, { Items } from '../components/Cards'
import Fake from '../fakeAPI/fake.json'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    <NavBar/>
    <main >
      <Flex direction={'column'} wrap={'wrap'}>
      {Fake.map( (items) =>{
        return <Cards items={items}/>
      })} 
      </Flex>
    </main>
    </>
  )
}
