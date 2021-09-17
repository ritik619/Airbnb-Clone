import { makeStyles } from "@material-ui/core";
const Styles = makeStyles({
	navBar: {
		display: "flex",
		justifyContent: "space-Between",
		alignItems: 'center',
		padding:'0px 40px'
		
	},
	logo: {
		width: "100px",
	},
	button: {
		color: "white",
		textTransform: "none",
	},
	menu: {
		padding: "10px",
		borderRadius: "20px",
		border: "1px solid rgb(221, 221, 221) !important",
		backgroundColor:"white"
	},
});
export default Styles;
