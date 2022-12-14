import React from 'react'
import styledComponents from 'styled-components'
import { categories } from '../data'
import CategoriesItem from './CategoriesItem'

const Container = styledComponents.div`
   display: flex;
   padding: 20px;
   justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
       {categories.map(item =>(
           <CategoriesItem key={item.id} item={item} />
       ))}
    </Container>
  )
}

export default Categories