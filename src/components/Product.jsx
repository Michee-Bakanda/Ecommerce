import React from 'react'
import styledComponents from 'styled-components'
import { Search, ShoppingCartOutlined} from "@material-ui/icons";

const Icon = styledComponents.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background: white;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 10px;
   transition: 0.5s
`

const Info = styledComponents.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover ${Icon}{
      transform: translateY(23px)
  }

`

const Container = styledComponents.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    &:hover ${Info}{
      opacity: 1
    }
`

const Circle = styledComponents.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    position: absolute
`
const Image = styledComponents.img`
   height: 75%;
//    width: 100%;
   z-index: 2
`



const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
                <Icon>
                <ShoppingCartOutlined />
                </Icon>
                <Icon>
                <Search />
                </Icon>
                <Icon>
                <ShoppingCartOutlined />
                </Icon>
        </Info>
       
    </Container>
  )
}

export default Product