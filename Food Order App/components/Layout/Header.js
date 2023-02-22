import React from "react";
import classes from "./Header.module.css";
//import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const imgURL =
  "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MealsApp</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgURL} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
