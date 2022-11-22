import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
   flex: 1;
   margin: 3px;
   height: 70vh;
   position: relative;
`
const Image = styledComponents.img`
   width: 100%;
   height: 100%;
   object-fit: contain
`
const Info = styledComponents.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 0, 0, 0.3)

`
const Title = styledComponents.h1`
  color: white;
  margin-bottom: 20px

`
const Button = styledComponents.button`
   border: none;
   padding: 10px;
   background: white;
   color: gray;
   cursor: pointer;
   font-weight: 600

`

const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoriesItem