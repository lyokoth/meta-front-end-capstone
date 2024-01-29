import React from 'react';
import images from '../../../constants/images';
import './Specials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const foodItems = [
  {
    name: 'Greek Salad',
    price: '$12.99',
    description: 'Our famous Greek salad made of fresh lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: images.greekSalad,
  },
  {
    name: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: images.bruchetta,
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    description: 'Our famous lemon dessert is made with fresh lemons from our garden. It is a light and refreshing dessert that is perfect for any occasion.',
    image: images.lemonDessert,
  },
  {
    name: 'Matcha Tiramisu Cake',
    price: '$6.99',
    description: 'A delicious dessert that combines the flavors of matcha and tiramisu. It’s the perfect way to end your meal!',
    image: images.tiramisu,
  }
];

const FoodCard = (props) => {
  return (
    <div id= "menu" className="specials-container">
      <div className="app_special_image">
        
      <img alt="food" className="specials-image" src={props.image} />
      </div>
      <div className="specials-info">
        <div className="specials-name-price">
          <h3 className="specials-name">{props.name}</h3>
          <p className="specials-price">{props.price}</p>
        </div>
        <p className="specials-description">{props.description}</p>
        <button className="specials-order">Order Now
        <FontAwesomeIcon icon={faArrowRight} className="specials-order-icon" />
        </button>
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <section id="menu" className="flex col justify-center">
    <div className="app__specials">
      <div className="app__specials-title-and-btn">
        <h1 className="app__specials-title">Specials</h1>
    
      </div>
      <div className="app__specials-food-card-holder">
        <div className="app__specials-food">
          {foodItems.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Specials;
