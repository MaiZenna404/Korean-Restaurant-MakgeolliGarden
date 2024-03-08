import React from 'react'
import styled from 'styled-components';
import BgImgHome from '../assets/HomepageImg.jpg'
import LogoResto from '../assets/LogoResto.png'
//import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs"; // icône téléphone
import { SiGooglemaps } from "react-icons/si"; //  icône localisation
import { BsInstagram } from "react-icons/bs"; // icône Instagram
import { MdAlternateEmail } from "react-icons/md"; // icône email
import '../fonts/fonts.css'


const Page = styled.body`
margin: 0;

`;

const Body = styled.div`
background-image: url(${BgImgHome});
height: 1080px;
width: 1620px;
display: block;
background-repeat: no-repeat;
background-size: cover;
margin: 0;
position: relative;

@media screen and (max-width: 820px) {
  width: 100%;
}

`;

const HomepageOverlay = styled.div`
background-color: #132823;
background-size: contain;
height: 1080px;
width: 1620px;
display: block;
position: absolute;
opacity: 0.55;
z-index: auto; // Modif
// Pour faire un overlay avec une opacity entre 0.5 et 0.8 sur la page
`; 

const Logo = styled.div`
transform: rotateZ(330deg);
left: 500px;
bottom: 300px;
width: 250px;
height: 230px;
background: url(${LogoResto}) 0 45% no-repeat;
background-size: 100% 100%;
cursor: pointer;
z-index: 9; // modif
position: relative;

@media screen and (max-width: 820px) {
  left: 85px;
  bottom: 450px;
}


`;

const HomeWrapper = styled.div`
position: absolute;
top: 20%;
display: flex;
flex-direction: row;
z-index: 2; // Modif
align-items: center;
`;

const Text = styled.div`
display: flex;
flex-direction: column;
`;

const Content = styled.div`
margin: 0;
`;

const RestaurantName = styled.h1`
 font-family: Korean Calligraphy;
 color: #ffffff;
 text-align: center; 
 z-index: 7;
 padding: 25px 0;
 font-size: 75px;

 @media screen and (max-width: 820px) {
  display: flex;
  flex-direction: row;
  margin-left: 50px;
}
 `;

const Description = styled.p`
    z-index: 8;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 820px) {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: calc(100% - 75%);
}
    
  
`;
const Intro = styled.p`
font-family: Korean Calligraphy;
 color: #ffffff;
 text-align: center; 
   text-align: center;
   font-size: 25px;
 `;

const ButtonWrapper = styled.div`
margin-top: 100px;
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 0px;
}

`;

const Button = styled.a`
display: inline-block;
text-align: center;
background: #d51e08;
color: #ffffff;
font-family: Korean Calligraphy;
padding: 15px;
border-radius: 10px;
text-decoration: none;
font-size: 20px;
font-weight: 400;
border: 1px solid transparent;
margin: 25px;
`;

const TextButton = styled.span`
padding: 25px;
margin: 0;

`;

const ButtonWrapperFooter = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`;

const ButtonFooter = styled.a`
display: flex;
justify-content: center;
align-items: center; // Pour aligner les icônes avec le texte
margin: 10px;
font-family: Korean Calligraphy;
text-decoration: none;
color: ghostwhite;
z-index: 25;
font-size: 22px;
opacity: 1;
background-color: rgba(19, 40, 35, 0.5);
padding: 5px 15px;
border-radius: 10px;

`;



function Homepage() {
  return (
    <>
    <Page>
    <Body>  
        
        <HomepageOverlay />
          <HomeWrapper>
        <Logo /> 
        <Content>
                <Text>
        <RestaurantName>Makgeolli <br/> Garden</RestaurantName>
            <Description>
                <Intro>
                Experience Seoul's vibrant atmosphere in the heart of Paris.</Intro>
                <br/>
                <br />
                <Intro>Immerse yourself in an authentic culinary journey where Korean flavors meet Parisian elegance.</Intro> <br />
                <br/>
<Intro>Welcome to our restaurant, where each dish is an exhilarating voyage into the culture and cuisine of South Korea.
                 </Intro>
            </Description>
</Text>
                <ButtonWrapper>
                    <Button href='/gallerypage' target='_blank'><TextButton>See our Dishes</TextButton></Button>
                    <Button href='/contacts-and-infos' target='_blank'><TextButton>Send us a review !</TextButton></Button>
                </ButtonWrapper>  
                
                <ButtonWrapperFooter>
                    <ButtonFooter href='/' target='_blank'>
                      <BsFillTelephoneFill /> <TextButton>01.23.45.67.89</TextButton>
                    </ButtonFooter>
                    <ButtonFooter href='/' target='_blank'>
                      <SiGooglemaps /> <TextButton>84 Rue d'Aboukir <br />75002 Paris</TextButton>
                    </ButtonFooter>
                    <ButtonFooter href='/' target='_blank'>
                      <BsInstagram /> <TextButton>makgeolli_G@instagram.fr</TextButton>
                    </ButtonFooter>
                    <ButtonFooter href='/' target='_blank'>
                      <MdAlternateEmail /> <TextButton>makgeolli@gmail.com</TextButton>
                    </ButtonFooter>
                    
                </ButtonWrapperFooter>
</Content>
            
       </HomeWrapper>
    </Body>
          
    </Page>
    </>
  )
}

export default Homepage
