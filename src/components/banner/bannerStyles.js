import { makeStyles } from "@material-ui/core";
import cover from "./cover.jpg";

const Styles = makeStyles({
  banner: {
    backgroundImage: `url(${cover})`,
    height:'520px',
    position:"relative"
  },
  alignCenter:{
      position:"absolute",
      bottom:100,
      left:'46%',
      color:"white"
  },
  centerButton:{
      textTransform:'none',
  }
});
export default Styles;
