import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import image8 from "../assets/images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out what's going on in FAWIM!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images-na.ssl-images-amazon.com/images/I/71QJgMca2CL.jpg"
              text="I Am Bulletproof, autobiography of Apostle Bryan Miranda."
              label="Book"
              path="/Products"
            />
            <CardItem
              src="https://img1.wsimg.com/isteam/ip/541f1b82-5b1f-4d58-b4d8-022efbcade8d/4F6067ED-2260-41F4-B497-CD7ED91A62E2.jpeg/:/cr=t:13.26%25,l:0%25,w:100%25,h:50%25/rs=w:600,h:300,cg:true"
              text="Get to know Apostle Bryan and Prophetess Melody Miranda."
              label="About Us"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={image8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
