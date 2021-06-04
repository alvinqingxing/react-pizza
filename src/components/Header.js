import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../assets/pizza.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Alvin's Pizzas 🍕</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Pizza" />
      </div>
    </Fragment>
  );
};

export default Header;
