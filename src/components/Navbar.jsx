import { Search, ShoppingCartOutlined} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {Badge} from '@material-ui/core';
import { mobile } from "../responsive";



const Container = styled.div`
   /* height: 60px; */
  /* ${mobile({backgroundColor: "red"})} */
  ${mobile({ background: "red" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* ${mobile({ background: "red" })} */
`;
// Left side start
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 8px;
  outline: none
`;

const Input = styled.input`
  border: none;
  
`;
// Left side end

// Center start
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`;
// Center end

// Right side start
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  curser: pointetr;
  margin-left: 25px
`;
// Right side end

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color: "gray",fontSize: "15px"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Active store.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    
    </Container>
  );
};

export default Navbar;
