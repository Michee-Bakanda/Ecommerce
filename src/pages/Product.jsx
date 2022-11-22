import React from "react";
import styledComponents from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styledComponents.div`
    
`;
const Wrapper = styledComponents.div`
    padding: 50px;
    display: flex
`;
const ImageContainer = styledComponents.div`
    flex: 1
`;
const Image = styledComponents.img`
    width: 100%;
    height: 80vh;
    object-fit: cover
`;
const InfoContainer = styledComponents.div`
    flex:1;
    padding: 0px 50px;
`;
const Title = styledComponents.h1`
    font-weight: 200
`;
const Desc = styledComponents.p`
    margin: 20px 0px
`;

const Price = styledComponents.span`
     font-weight: 100;
     font-size: 19px
`;

const FilterContainer = styledComponents.div`
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin: 30px 0px
`;
const Filter = styledComponents.div`
    display: flex;
    align-items: center
`;
const FilterTitle = styledComponents.span`
     font-weight: 200;
     font-size: 20px
`;

const FilterColor = styledComponents.div`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background: #${props=>props.color};
     margin: 0px 5px;
     cursor: pointer
`;

const FilterSize = styledComponents.select`
     margin-left: 10px;
     padding: 5px
`;

const FilterOption = styledComponents.option`
     font-weight: 100;
     font-size: 19px
`;

const AddContainer = styledComponents.div`
     width: 50%;
     display: flex;
     align-items: center;
     justify-content: space-between
`;
const AmountContainer = styledComponents.div`
     display: flex;
     align-items: center
`;

const Amount = styledComponents.span`
     width: 30px;
     height: 30px;
     border-radius: 10px;
     border: 1px solid teal;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0px 5px

`;

const Button = styledComponents.button`
     padding: 15px;
     border: 2px  solid teal;
     background: white;
     cursor: pointer;
     font-weight:500;

     &:hover{
         background: f5f5f5
     }
`;

const Remove = styledComponents.option`
     font-weight: 100;
     font-size: 19px
`;

const Add = styledComponents.option`
     font-weight: 100;
     font-size: 19px
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <hr />
      <Wrapper>
        <ImageContainer>
          <Image src="/image/category-men.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denium jeans</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab
            eligendi cum fugiat similique quis eveniet dolor. Nemo, consectetur
            mollitia! Eaque odio ut facilis hic quia. In quisquam exercitationem
            quo!
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>color</FilterTitle>
              <FilterColor color="000" ></FilterColor >
              <FilterColor color="f5f5f5" ></FilterColor >
              <FilterColor color="616161" ></FilterColor >
            </Filter>
            <Filter>
              <FilterTitle>size</FilterTitle>
              <FilterSize>
                <FilterOption>xs</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>XL</FilterOption>
                <FilterOption>xs</FilterOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove>-</Remove>
                  <Amount>1</Amount>
                  <Add>+</Add>
              </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
