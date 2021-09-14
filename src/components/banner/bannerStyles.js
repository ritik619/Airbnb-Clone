import { makeStyles } from "@material-ui/core";
import cover from "./cover.jpg";

const Styles = makeStyles({
	banner: {
		backgroundImage: `url(${cover})`,
		height: "520px",
		position: "relative",
	},
	alignCenter: {
		textAlign: "center",
    color: "white",
    paddingTop:'300px'
	},
	centerButton: {
		textTransform: "none",
		width: 205,
		height: 64,
		borderRadius: "50px",
	},
	buttonLabel: {
		background: "-webkit-linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%)",
		"-webkit-background-clip": "text",
		"-webkit-text-fill-color": "transparent",
	},
});
export default Styles;
