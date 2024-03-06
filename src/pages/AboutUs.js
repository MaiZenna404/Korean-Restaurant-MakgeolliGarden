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
position: relative;`;

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
margin-left: 275px;

`;

const Title = styled.h1`
 font-family: Korean Calligraphy;
 color: #ffffff;
 padding: 35px;
 font-size: 50px;
 z-index: 15;
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
            <TextWrapper>
            <Title> About Us</Title>
            

            <Text1>Welcome to Makgeolli Garden, where we invite you to embark on a culinary adventure blending the vibrant flavors of Seoul with the timeless elegance of Paris. Nestled in the heart of the city, our restaurant is a celebration of Korean cuisine and culture, curated to delight even the most discerning palates.</Text1>
            <br />
            <br /> 
            <Text1>At Makgeolli Garden, we are passionate about delivering an authentic experience that transports our guests to the bustling streets of Seoul. Our chefs artfully combine traditional Korean recipes with modern techniques, sourcing the finest ingredients to ensure each dish is a harmonious symphony of flavors.</Text1>
            <br/>
            <br/>
            <Text1>Step inside our inviting space and let the ambiance whisk you away to a world where every meal is a celebration. Whether you're craving the bold spiciness of kimchi, the comforting warmth of bibimbap, or the sizzle of Korean barbecue, our menu offers a tantalizing array of options to satisfy every craving.</Text1>
            <br/>
            <br/>
            <Text1>Beyond the food, our attentive staff is dedicated to providing impeccable service, ensuring that every visit to [Restaurant Name] is an unforgettable experience. Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, we strive to exceed your expectations at every turn.</Text1>
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
