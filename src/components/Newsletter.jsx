import { Send } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
   height: 60vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background-color: #3c393c;
   color: white
`
const Title = styledComponents.h1`
   font-size: 70px;
   margin-bottom: 20px
`
const Description = styledComponents.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px
`
const InputContainer = styledComponents.div`
    width: 50%;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray
`
const Input = styledComponents.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px
`
const Button = styledComponents.button`
   flex: 1;
   border: none;
   background-color: teal;
   color: white
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products</Description>
        <InputContainer>
             <Input placeholder='Your email'/>
             <Button>
                 <Send/>
             </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter