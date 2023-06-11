'use client'
import { Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import Cards from '@/components/Cards'
import Fake from '@/fakeAPI/fake.json'
import React, { Suspense } from 'react'
import Loading from '../loading'

const Category = () => {
    const pathname = usePathname()
    //buscar por categoria pathname.split('/')[2]
    const category = Fake.filter(category => {
        if (pathname.split('/')[2] === "men's%20clothing") return category.category === "men's clothing"
        else if (pathname.split('/')[2] === "women's%20clothing") return category.category === "women's clothing"
        else return category.category === pathname.split('/')[2]
    })
    //arreglar hidratacion
    return (
        <Suspense fallback={<Loading />}>
            <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'80px'} my={10} w={'70%'} mx={'auto'} >
                {category.map((items) => {
                    return <Cards key={items.id} items={items} />
                })}
            </Flex>
        </Suspense>
    )
}

export default Category