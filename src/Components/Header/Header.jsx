import React from 'react'
import './Header.css'
import BlockRevealAnimation from 'react-block-reveal-animation';
import { images, headerData } from '../../constants';
import { Link } from 'react-router-dom';




 // put in header-container div when page is ready
const Header = () => {
 
  return ( 
    <header>
        
        <div className="app__header-data">
            <BlockRevealAnimation color="#F4CE14">
                <h1>
                    {headerData.title}
                </h1>
            </BlockRevealAnimation>
            <BlockRevealAnimation color='#EDEFEE'>
                <h3>
                    {headerData.location}
                </h3>
                <p>
                   {headerData.description}
                </p>
            </BlockRevealAnimation>
            <BlockRevealAnimation color="#F4CE14">
                <Link to= "/reservations">
                <button>
                    {headerData.btnName}
                </button>
                </Link>
            </BlockRevealAnimation>
            
        </div>
        <BlockRevealAnimation color='#333333'>
      
                <div 
                    className="app__header-image"
                    style={{backgroundImage:`url(${images.restaurantFood})`}}
                />
      
        </BlockRevealAnimation>
    </header> );
}
export default Header; 