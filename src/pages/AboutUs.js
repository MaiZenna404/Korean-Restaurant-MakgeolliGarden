import React from 'react'
import styled from 'styled-components'
import AboutsBgImg from '../assets/AboutUs.jpg'
import '../fonts/fonts.css'


const Content = styled.div`
background-image: url(${AboutsBgImg});
height: 1080px;
width: 1620px;
display: block;
background-repeat: no-repeat;
background-size: contain;
margin-top: 0;
position: relative;

@media screen and (max-width: 820px) {
  width: 100%;
  background-size: cover;
}
`;

const Overlay = styled.div`
background-color: #132823;
background-size: contain;
width: 1620px;
height: 1080px;
display: block;
position: absolute;
opacity: 0.55;
z-index: 2;
`;

const TextWrapper = styled.div`
max-width: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 20%;

`;

const Title = styled.h1`
 font-family: Korean Calligraphy;
 color: #ffffff;
 padding: 50px;
 font-size: 50px;
 z-index: 15;
 text-align: center;
 position: relative;
 `;

const Text1 = styled.p` font-family: Korean Calligraphy;
color: #ffffff;
font-size: 25px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(19, 40, 35, 0.5);
padding: 20px;
border-radius: 10px;
z-index: 16;
text-align: center;

`;

const AboutUs = () => {
  return (
    <>
      <Content>
        <Overlay />
            
            <Title> About Us</Title>
            
            <TextWrapper>
            <Text1>Welcome to Makgeolli Garden, where we invite you to embark on a culinary adventure blending the vibrant flavors of Seoul with the timeless elegance of Paris. Nestled in the heart of the city, our restaurant is a celebration of Korean cuisine and culture, curated to delight even the most discerning palates.</Text1>
            <br />
            <br /> 
            <Text1>We are passionate about delivering an authentic experience that transports our guests to the bustling streets of Seoul. Our chefs artfully combine traditional Korean recipes with modern techniques, sourcing the finest ingredients to ensure each dish is a harmonious symphony of flavors.</Text1>
            <br/>
            <br/>
            <Text1>Join us at Makgeolli Garden and discover why we're more than just a dining destination – we're a culinary journey that celebrates the rich tapestry of Korean cuisine, right in the heart of Paris."</Text1>
            <br/>
            <br/>

            </TextWrapper>
      </Content>
    </>
  )
}

export default AboutUs
