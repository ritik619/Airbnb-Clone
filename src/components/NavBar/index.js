import { Button } from "@material-ui/core";
import React from "react";
import { ReactComponent as AirbnbLogo } from "./Airbnb_logo.svg";
import navBarStyles from "./navBarStyles.js";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Navbar = () => {
  const classes = navBarStyles();
  return (
    <div className={classes.navBar}>
      <AirbnbLogo className={classes.logo} />
      <div>
        <Button className={classes.button} color="primary">
          Places to Stay
        </Button>
        <Button className={classes.button} color="primary">
          Experiences
        </Button>
        <Button className={classes.button} color="primary">
          Online Experiences
        </Button>
      </div>
      <div className={classes.rightHeader}>
        <Button className={classes.hostButton}>Become a host</Button>
        <Button>
          <LanguageIcon fontSize="small" className={classes.color} />
        </Button>
        <span className={`${classes.menu} ${classes.color}`}>
          <Button startIcon={<MenuIcon />} endIcon={<AccountCircleIcon />} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
