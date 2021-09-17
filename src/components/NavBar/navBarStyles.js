import { makeStyles } from "@material-ui/core";
const Styles = makeStyles({
  navBar: {
    display: "flex",
    justifyContent: "space-Between",
  },
  logo: {
    paddingLeft: "70px",
    width: "100px",
  },
  button: {
    color: "white",
  },
  rightHeader: {
    paddingRight: "70px",
  },
  menu: {
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid rgb(221, 221, 221) !important",
  },
  hostButton: {
    textTransform: "none",
    color: "white",
  },
  color: {
    color: "white",
  },
});
export default Styles;
