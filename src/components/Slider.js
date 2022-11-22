import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { sliderItems } from '../data'

const Container = styledComponents.div`
   width: 100%;
   height: 100vh;
   display: flex;
//    background-color: coral;
   position: relative;
   overflow: hidden
`

const Arrow = styledComponents.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props => props.direction === "left" && "13px"};
    right:${props => props.direction === "right" && "13px"};
    margin: auto;
    curser: pointer;
    opacity: 0.5;
    z-index:2
`

const Wrapper = styledComponents.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${(props)=> props.slideIndex * -100}vw)
`

const Slide = styledComponents.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
    background-color: #${props => props.bg}
`

const ImageContainer = styledComponents.div`
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    // flex: 0.5
    width: 40%
`

const Image = styledComponents.img`
    height: 70%;
    flex: 0.5;
`

const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 50px;
`

const Title = styledComponents.h1`
    font-size: 50px
`
const Desc = styledComponents.p`
    font-size: 20px;
    margin: 35px 0px;
    font-weight: 500;
    letter-spacing: 3px;
    padding: 12px
`
const Button = styledComponents.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
            console.log("left",slideIndex)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
            console.log("right",slideIndex)
        }
    }

    return (
        <Container>
            <Arrow onClick={() => handleClick('left')} direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide style={{ backgroundColor: item.bg }} bg={item.bg}>
                        <ImageContainer>
                            <Image alt="women" src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow onClick={() => handleClick('right')} direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider