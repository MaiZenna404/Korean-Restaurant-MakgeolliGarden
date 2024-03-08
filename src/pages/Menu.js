import React from 'react';
import styled from 'styled-components';
import { Appetizers } from './menuElements/Appetizers';
import { Entrees } from './menuElements/Entrees';
import '../fonts/fonts.css';
import './FullMenu.css';
// import d'images du menu
import Img1 from './menuImg/kimchiPancake.jpg'
import Img2 from './menuImg/menuBibimbap.jpg'
import Img3 from './menuImg/samgyetang.jpg'



const Title = styled.h2`
text-align: center;
font-family: Korean Calligraphy;
font-size: 50px;
color : #1b6050;
padding: 75px;
 margin : 2px;

 /* Responsive */ 
@media screen and (max-width: 820px) {
  height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 75px;
  
}
 `;

const Menu = () => {

  return (
    <>
    <div className='menuPage'>
    <Title>Menu</Title>
    <hr /> 
    <div className='Page1'>
      <section>
        <article className='sideImg'>
          <img className='sideLeftImg1' src={Img1} alt="" />
          <img className='sideLeftImg2' src={Img3} alt="" />
        </article>
        <article className='Appetizers'>
    <h2>Starters</h2>
      <ul>
        {Appetizers.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.dish}</h3>
              <p>{item.description} ......<span>{item.price}</span></p> 
            </li>
          )

        })}
      </ul>
      </article>
      <article className='sideImg'>
          <img className='sideLeftImg2' src={Img2} alt="" />
        </article>

      <article className='Entrees'>
      <h2>Entrees</h2>
      <ul>
        {Entrees.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.description} ...... {item.price}</p>
            </li>
          )
        })}
        </ul>
        </article>

        </section>

        </div>
      
      </div>
    </>
  )
}

export default Menu
