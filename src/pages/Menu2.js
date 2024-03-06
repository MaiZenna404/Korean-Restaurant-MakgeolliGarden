import React from 'react'
import styled from 'styled-components';
import { Desserts } from './menuElements/Desserts';
import { Drinks } from './menuElements/Drinks';
import { Alcohol } from './menuElements/Alcohol';
import '../fonts/fonts.css';
import './FullMenu.css';
import Img2 from './menuImg/maekgolli.jpg'
import Img1 from './menuImg/sujeongwha.jpg';
import Img3 from './menuImg/taiyaki.jpg'


const Title = styled.h2`
text-align: center;
font-family: Korean Calligraphy;
font-size: 50px;
color : #1b6050;
padding: 75px;
 margin : 2px;
 `;

const Menu2 = () => {


  return (
    <>
    <div className='menuPage2'>
    <Title>Menu</Title>
    <hr /> 
    <div className='Page2'>
      <section className='DessertAndDrinks'>
        <article className='Desserts'>
    <h2>Desserts</h2>
      <ul>
        {Desserts.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.description} ......<span>{item.price}</span></p> 
            </li>
          )

        })}
      </ul>
      </article>
      <article className='sideMiddle'>
          <img className='sideMiddleImg2' src={Img2} alt="" />
          <img className='sideMiddleImg1' src={Img1} alt="" />
        </article>
      <article className='soft'>
      <h2>Soft drinks</h2>
      <ul>
        {Drinks.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.soft}</h3>
              <p>{item.description} ...... {item.price}</p>
            </li>
          )
        })}
        </ul>
        </article>
        
<article className ='alcohol'>
      <h2>Alcoholic drinks</h2>
      <ul>
        {Alcohol.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.alcohol}</h3>
              <p>{item.alcoholContent} ...... {item.priceAlcohol}</p>
            </li>
          )
        })}
        </ul>
        
        <article className='sideImg'>
          
          <img className='sideMiddleImg3' src={Img3} alt="" />
        </article>
        </article>

        </section>

        </div>
      
      </div>
    </>
  )
}

export default Menu2
