import { createMuiTheme } from '@material-ui/core/styles';

//const colorPrimary = "#00838f";
//const colorSecondary = "#FFBA60";

const colorPrimary = "#fff";
//const colorSecondary = "#0d47a1"; //blue
const colorSecondary = "#0d47a1"; //

export default createMuiTheme({

  palette:{
    common:{

      colorPrimary:`${colorPrimary}`,
      colorSecondary:`${colorSecondary}`, 
    },
    primary:{
      main:`${colorPrimary}`
    },
    secondary:{
      main:`${colorSecondary}`
    }
  },
  typography:{
    tab:{
      fontFamily:"Raleway",
      textTransform:"none",
      fontWeight:700,
      fontSize:'1rem',
    },
    button:{
      borderRadius:"50px",
      marginLeft:"50px",
      marginRight:"25px",
      fontSize:'1rem',
      textTransform:"upper",
      color:"white",
      //backgroundColor:"#FFBA60"
    },
    links:{
       color:"black", 
    }
  },
  
})