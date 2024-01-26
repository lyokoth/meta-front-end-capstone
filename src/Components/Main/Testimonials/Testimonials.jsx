import React from "react";
import { images } from "../../../constants";    
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        image: images.cust1, 
        name: "John",
        reviewText: "I love this place! The food is amazing and the staff is so friendly. I would recommend this place to anyone who wants to have a great meal with friends or family.",
    },
    {
        image: images.jill2,
        name: "Jill",
        reviewText: "My friends and I came wanting to try something new. We were so blown away by the friendly staff and amazing food. If you like good food and great customer service, this is your place!",
    },
    {
        image: images.cust3,
        name: "Joe",
        reviewText: "Amazing atmosphere and food. I especially loved the bruschetta.",
    },
    {
        image: images.jane,
        name: "Jane",
        reviewText: "I always take my friends and family here when they come to visit. The food is amazing and the staff is so friendly. I would recommend this place to anyone who wants to have a great meal with excellent customer service.",
    },
];

const ReviewCard = ({props}) => {
    return (
         <div className="app__testimonials-review">
           <div className="app__testimonials-stars">
                <FaStar className="app__testimonials-review-stars-icon"/>
                <FaStar className="app__testimonials-review-stars-icon"/>
                <FaStar className="app__testimonials-review-stars-icon"/>
                <FaStar className="app__testimonials-review-stars-icon"/>
                <FaStar className="app__testimonials-review-stars-icon"/>
           </div>
           <div className="app__testimonials-name-image">
            <img className="app__testimonial-review-image" src={props.image} alt={props.name} />
             <h6 className="app__testimonials-review-name">{props.name}</h6>
           </div>
           <p className="app__testimonials-review-text">{props.reviewText}</p>
         </div>
        );
}
const Testimonials = () => {
return (
    <section id="testimonials">
    <div className="testimonials-container">
    <div className="app__testimonials-content">
        <h1 className="app__testimonials-title">Testimonials</h1>
        {/* <ReviewCard /> */}
        <div className="app__testimonial-review-card">
            {
                reviews.map((review) => {
                        return (
                         
                                <ReviewCard props={review} />
                
                        );
                    })
            }
        </div>
    </div>
    </div>
    </section>
);
}


export default Testimonials;
