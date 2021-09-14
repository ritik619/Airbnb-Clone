import { makeStyles } from "@material-ui/core";

const headerStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent:"space-between",    
    alignItems:'center',
    width: "100%",
    backgroundColor: "white",
    height: "80px",
  },
  headerIcon: {
    height: "80px",
    paddingLeft: "70px",
  },
  headerBtn:{
      borderRadius:"50px",
      width:'300px',
      textTransform: 'none',
      justifyContent:'space-between',
      height:'48px',
      fontSize:'smaller',
      fontWeight:"bold  "
    },
  searchIcon:{
      width:32,
      height:32,  
      borderRadius:"50%",
      backgroundColor:"#FF385C"
  },
  rightHeader:{
    paddingRight:'70px'
  },
  menu:{
      padding:"10px",
      borderRadius:"20px",
      border:"1px solid rgb(221, 221, 221) !important"
  },
  hostButton:{
    textTransform:'none',
  }

}); 
export default headerStyles;
