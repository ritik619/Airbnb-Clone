import { Button } from "@material-ui/core";
import React from "react";
import headerStyles from "./headerStyles";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  const classes = headerStyles();
  return (
    <div className={classes.header}>
      <img
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        className={classes.headerIcon}
      />
      <div>
        <Button
          size="large"
          endIcon={
            <div className={classes.searchIcon}>
              <SearchIcon fontSize="small" htmlColor="white" />
            </div>
          }
          variant="outlined"
          className={classes.headerBtn}
        >
          Start your search
        </Button>
      </div>
      <div className={classes.rightHeader}>
        <Button className={classes.hostButton}>Become a host</Button>
        <Button>
          <LanguageIcon fontSize="small" />
        </Button>
        <span className={classes.menu}>
          <Button startIcon={<MenuIcon />} endIcon={<AccountCircleIcon />} />
        </span>
      </div>
    </div>
  );
};

export default Header;
