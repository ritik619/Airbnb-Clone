import React from "react";
import cover from "./cover.jpg";
import bannerStyles from "./bannerStyles";
import { Button } from "@material-ui/core";
const Banner = () => {
  const classes = bannerStyles();
  return (
    <div className={classes.banner}>
    <div className={classes.alignCenter}>
      <div>Not sure where to go? Perfect.</div>
      <br/>
      <Button className={classes.centerButton} variant="contained" color="default">I'm flexible</Button> 
    </div>
    </div>
  );
};

export default Banner;
