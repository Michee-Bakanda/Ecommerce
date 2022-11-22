import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    display: flex;
` 
const Left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
` 
const Logo = styledComponents.h1`
    
`
const Desc = styledComponents.p`
    margin: 20px 0px
`
const SocialContainer = styledComponents.div`
    display: flex
`
const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px
`

const Center = styledComponents.div`
    flex: 1;
    padding: 20px
` 

const Title = styledComponents.h3`
`

const List = styledComponents.ul`
   padding: 0px;
   display: flex;
//    flex-dirction: column;
   flex-wrap: wrap
`

const ListItem = styledComponents.li`
  list-style-type: none;
  width: 50%;
  margin-bottom: 10px
`

const Right = styledComponents.div`
    flex: 1;
    padding: 20px
` 

const ContactItem= styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center
`

const Footer = () => {
  return (
    <Container>
        <Left>
           <Logo>Active store.</Logo>
           <Desc>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi consequuntur eaque ad explicabo asperiores praesentium possimus vitae veniam, consectetur iusto optio reiciendis esse expedita, molestias porro quod provident. Magni, perferendis?
           </Desc>
           <SocialContainer>
               <SocialIcon color='3B5999'>
                   <Facebook/>
               </SocialIcon>
               <SocialIcon color='E44057'>
                   <Instagram />
               </SocialIcon>
               <SocialIcon color='55ACEE'>
                   <Twitter />
               </SocialIcon>
               <SocialIcon color='E60023'>
                   <Pinterest />
               </SocialIcon>
           </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Home</ListItem>
            </List>
        </Center>
        <Right>
           <Title>Contact</Title>
           <ContactItem><Room style={{marginRight: "10px"}} />rosebttenville, 176 high street</ContactItem>
           <ContactItem><Phone style={{marginRight: "10px"}} />078550501</ContactItem>
           <ContactItem><Mail style={{marginRight: "10px"}} />micbakanda@gmail.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer