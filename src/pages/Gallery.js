import React from 'react';
import { Gallery } from "react-grid-gallery";
import Img1 from '../assets/galleryImg/bibimbap.jpg';
import Img2 from '../assets/galleryImg/bingsu.jpg';
import Img3 from '../assets/galleryImg/buchujeon.jpg';
import Img4 from '../assets/galleryImg/bulgogi.jpg';
import Img5 from '../assets/galleryImg/hotteok.jpg';
import Img6 from '../assets/galleryImg/haemulPajeon.jpg';
import Img7 from '../assets/galleryImg/miyeok guk.jpg';
import Img8 from '../assets/galleryImg/samgyetang.jpg';
import styled from 'styled-components';
import './galleryElements/gallery.css';
import '../fonts/fonts.css'


const images = [
    {
       src: Img1,
       width: 1280,
       height: 960,
       alt: ''
    },
    {
       src: Img3,
       width: 320,
       height: 212,
       alt: ''
    },
    {
       src: Img4,
       width: 1200,
       height: 1800,
       alt: ''
    },
    {
       src: Img7,
       width: 320,
       height: 212,
       alt: ''
    },
    {
       src: Img8,
       width: 320,
       height: 212,
       alt: ''
    },
    {
       src: Img6,
       width: 320,
       height: 212,
       alt: ''
    },
    {
       src: Img7,
       width: 320,
       height: 212,
       alt: ''
    },
    {
       src: Img2,
       width: 320,
       height: 212,
       alt: ''
    },
    {
       src: Img5,
       width: 2000,
       height: 1120,
       alt: ''
    },
 ];

 const Title = styled.h1`
 text-align: center;
 font-family: Korean Calligraphy;
 font-size: 40px;
 color : #1b6050;
 padding: 75px;
 margin : 2px;
 text-align: center;
 `;


const GalleryPage = () => {
  return (
    <>
    <div className='gallery'>
        <Title>Gallery</Title>
        
    <div className='galleryContent'>
<Gallery images={images} />
        </div>
</div>
    </>
  )
}

export default GalleryPage



