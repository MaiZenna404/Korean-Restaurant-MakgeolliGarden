import React from 'react';
import styled from 'styled-components';
import './contactsInfos.css';
import '../fonts/fonts.css';
import FormFooter from '../components/FormFooter';

const FooterOverlay = styled.div`
background-color: #132823;
background-size: contain;
height: 1080px;
width: 1620px;
display: block;
position: absolute;
opacity: 0.4;
z-index: auto;

 /* Responsive */

 @media screen and (max-width: 820px) {

height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
`;






const ContactsInfos = () => {

      return (
        <>
        
        <div className='footerBg'>
            <FooterOverlay />
            <section className='footerContent'>
                <div className='leftContentFooter'>
                <article className='openingHoursFooter'>
                    <div className='overlayBg'>
                    <h2 className='hours'>Opening Hours</h2>
                        <ul>
                            <li className='hours'>Monday - Friday : 8:00pm - 23:00pm</li>
                            <li className='hours'>Saturday - Sunday : 12:00 am - 3:00pm | 18:00pm - 00:00am</li>
                            <li className='hours'>Thursday - Closed</li>
                        </ul>
                        </div>
                </article>
                <aside className='maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4907197141806!2d2.3451529760009096!3d48.86792110003645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e17a4604551%3A0x884f1d33a0526df9!2s84%20Rue%20d&#39;Aboukir%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1709743082152!5m2!1sfr!2sfr" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='GoogleMaps'></iframe>
                </aside>
</div>
            
              <FormFooter />
            </section>
    
        </div>
        </>
      )
    }
    
export default ContactsInfos
