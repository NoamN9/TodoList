import React from "react";
import Picture from "./MytoDoListLogo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
  
       <img className={classes.Logo} src={Picture} alt=""/>
  );
};

export default Logo;


