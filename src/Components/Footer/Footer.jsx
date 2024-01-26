import React from 'react'
import './Footer.css';
import {  images  } from '../../constants/';

const footerNavi = ["Home", "About", "Menu", "Order Online", "Login"];
const footerContact = ["Phone: 773-123-4567", "Email: Mario@littlelemon.com", "Address: 1234 N. Lemon Ave. Chicago, IL 9999"]
const footerHours = ["Monday - Thursday: 9am - 10pm", "Friday - Saturday: 11am - 11pm", "Sunday: 11am - 9pm"]
const socialMedia = ["Facebook", "Instagram", "Twitter"]


const FooterItems = (props) => {
  return (<div className="app__footer-items" id="footer">
      <h1 className="app__footer-item-title">{props.title}</h1>
      <ul className="app__footer-item-names">
          {
              props.sectionList.map((item) => {
                  return (<li key={item}>
                      <a href={`#${item}`}>{item}</a>
                  </li>);
              })
          }
      </ul>
      
  </div>);
};
const Footer = () => {
return (<footer className="app__footer-section">
  <div className="app__about-image-box img-box-1"
      style= 
      {
          {
              backgroundImage: `url(${images.restaurant})`
          }
      }
  />
      <FooterItems title="Navigation" sectionList={footerNavi} />
      <FooterItems title="Contact" sectionList={footerContact} />
      <FooterItems title="Hours" sectionList={footerHours} />
      <FooterItems title="Social Media" sectionList={socialMedia} />
    </footer>)

    };

export default Footer;