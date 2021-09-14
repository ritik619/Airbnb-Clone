import React from "react";
import bannerStyles from "./bannerStyles";
import { Button } from "@material-ui/core";
import Navbar from "../NavBar";

const Banner = () => {
	const classes = bannerStyles();
	return (
    <div className={classes.banner}>
      <Navbar/>
			<div className={classes.alignCenter}>
				<h3>Not sure where to go? Perfect.</h3>
				<br />
				<Button
					size="large"
					className={classes.centerButton}
					variant="contained"
					color="default"
				>
					<h3 className={classes.buttonLabel}>I'm flexible</h3>
				</Button>
			</div>
		</div>
	);
};

export default Banner;
