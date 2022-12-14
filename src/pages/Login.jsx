import React from 'react'
import styledComponents from "styled-components";


const Container = styledComponents.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("./image/category-men.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center
`;
const Wrapper = styledComponents.div`
    padding: 20px;
    width: 25%;
    background: white;
`;
const Form = styledComponents.form`
    display: flex;
    flex-direction: column
    // flex-wrap: wrap;

`;

const Input = styledComponents.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px
`;

const Title = styledComponents.h1`
    font-size: 24px;
    font-weight: 300
`;



const Button = styledComponents.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px
`;

const Link = styledComponents.a`
   color: black;
   font-size: 12px;
   margin: 5px 0px;
   text-decoration: underline;
   cursor: pointer
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
               
                <Button>
                    Login
                </Button>
                <Link>Forgot Password?</Link>
                <Link>create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login