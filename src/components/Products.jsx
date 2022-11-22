import React from 'react'
import styledComponents from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styledComponents.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
    
`

const Products = () => {
  return (
    <Container>
       {popularProducts.map((item)=>(
          <Product key={item.id} item={item}/>
       ))}
    </Container>
  )
}

export default Products