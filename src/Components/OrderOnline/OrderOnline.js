import React from "react";
import './OrderOnline.css';
import { images, orderOnline} from "../../constants";


export default function OrderOnline() {
    return (
        <>
            <div className="order-online">
                <div className="order-online__container">
                    <div className="order-online__container__text">
                        <h1>{orderOnline.title}</h1>
                        <p>{orderOnline.description}</p>
                        <button>{orderOnline.btnName}</button>
                    </div>
                    <div className="order-online__container__image">
                        <img src={images.underConstruction} alt="under construction" />
                    </div>
                </div>
            </div>
        </>

    )}
