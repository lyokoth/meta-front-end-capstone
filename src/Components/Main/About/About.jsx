import React from 'react';
import './About.css';
import {  images  } from '../../../constants/';

const aboutData = {
    title: 'Little Lemon',
    location: 'Chicago',
    description: 'We are a family owned restaurant founded by brothers Mario and Adrian in 1998. For over 20 years, we have been proudly serving lunch and dinner in the Chicago area. We pride ourselves on our fresh ingredients and our friendly staff. We are open 7 days a week for lunch and dinner.',
    image1: images.MarioandAdrianA,
    image2: images.restaurantChef,
    

};

const About = () => {
    return (
        <div
            className="app_about-section"
        >
            
            
                <div className="app_about-description-box">
                    <h1 className="app__about-title">{aboutData.title}</h1>
                    <br />
                    <h4 className="app__about-subtitle">{aboutData.location}</h4>
                    <br />
                    <p className="app__about-description">
                        {aboutData.description}
                            <br />
                    </p>
                </div>
           
             <div className="app__about-image-box-section"> 
                <div className="app__about-image-holder flex flex-col">
                        <div className="app__about-image-box img-box-1">
                        <img alt="food" className="app__about-image-box img-box-1" src={aboutData.image2} />
                        </div>
    
                                    
                             
                        <div className="app__about-image-box img-box-2">
                        <img alt="food" 
                        className="app__about-image-box" 
                        src={aboutData.image1} />
                        </div>
                           
                </div>
             </div> 

        </div>
    );
};
export default About;