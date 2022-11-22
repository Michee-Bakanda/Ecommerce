import React from 'react'
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styledComponents from "styled-components";
import { Add, Remove } from '@material-ui/icons';

const Container = styledComponents.div`
    
`;

const Wrapper = styledComponents.div`
    padding: 20px
`;

const Title = styledComponents.h1`
    font-weight: 300;
    text-align: center
`;

const Top = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px
`;

const TopButton = styledComponents.button`
    padding: 10px;
    font-weight: 600;
    curser: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"}
`

const TopTexts = styledComponents.div`

`

const TopText = styledComponents.span`
     text-decoration: underline;
     cursor: pointer;
     margin: 0px 10px
`

const Bottom = styledComponents.div`
    display: flex
`;

const Info = styledComponents.div`
    flex: 3;
`;
const Summary = styledComponents.div`
    flex:1;
`;

const Product = styledComponents.div`
    display: flex
`;

const ProductDetail = styledComponents.div`
    flex:1;
    display: flex
`;

const Image = styledComponents.img`
    // flex:1;
    width: 200px

`;

const Details = styledComponents.div`
    // flex:1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around
`;

const ProductName = styledComponents.span`
    flex:1;
`;

const ProductId = styledComponents.span`
    flex:1;
`;

const ProductColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props=>props.color}
`;

const ProductSize = styledComponents.span`
    flex:1;
`;

const PriceDetail = styledComponents.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`;

const ProductAmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px
`;

const ProductAmount = styledComponents.div`
    font-size: 24px;
    margin: 5px
`;

const ProductPrice = styledComponents.div`
    font-size: 30px;
    font-weight: 200
`;

const Hr = styledComponents.hr`
    background: #eee;
    border: none;
    height: 1px
`



const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                   <Product>
                   <ProductDetail>
                        <Image src="./image/product-2.jpg" />
                        <Details>
                            <ProductName><b>Product:</b>Jessie thunder shoes</ProductName>
                            <ProductId><b>ID:</b>93813718293</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b>34</ProductSize>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add />
                              <ProductAmount>2</ProductAmount>
                           <Remove />
                       </ProductAmountContainer>
                       <ProductPrice>$34</ProductPrice>
                    </PriceDetail>
                   </Product>
                       <Hr/>
                   <Product>
                   <ProductDetail>
                        <Image src="./image/product-1.jpg" />
                        <Details>
                            <ProductName><b>Product:</b>Jessie thunder shoes</ProductName>
                            <ProductId><b>ID:</b>93813718293</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b>34</ProductSize>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add />
                              <ProductAmount>2</ProductAmount>
                           <Remove />
                       </ProductAmountContainer>
                       <ProductPrice>$34</ProductPrice>
                    </PriceDetail>
                   </Product>
                </Info>
                <Summary>
                    summary
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />

    </Container>
  )
}

export default Cart