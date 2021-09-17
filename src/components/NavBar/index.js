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
			<div>
				<AirbnbLogo className={classes.logo} />
			</div>
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
			<div>
				<Button className={classes.button}>Become a host</Button>
				<Button>
					<LanguageIcon fontSize="small" className={classes.button} />
				</Button>
				<span className={classes.menu}>
					<Button startIcon={<MenuIcon />} endIcon={<AccountCircleIcon />} />
				</span>
			</div>
		</div>
	);
};

export default Navbar;
