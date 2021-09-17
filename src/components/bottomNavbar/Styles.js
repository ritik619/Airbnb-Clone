import { makeStyles } from "@material-ui/core";
const styles = makeStyles({
	BottomNavBar: {
		display: "flex",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "white",
		height: "66px",
		borderRadius: "32px",
		textTransform: "none",
		fontWeight: "bold",
	},
	searchIcon: {
    width: 40,
    height:40,
		borderRadius: "50%",
		backgroundColor: "#FF385C",
	},
});
export default styles;
