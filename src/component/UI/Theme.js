import { createMuiTheme } from '@material-ui/core/styles';

//const colorPrimary = "#00838f";
//const colorSecondary = "#FFBA60";

const colorPrimary = "#fff"; //white
const colorSecondary = "#0d47a1"; //blue
//const colorSpecial = "#FFBA60"; //orange

export default createMuiTheme({
  palette:{
	///type:"light", //dark
    common:{
      colorPrimary:`${colorPrimary}`,
      colorSecondary:`${colorSecondary}`, 
      //colorSpecial:`${colorSpecial}`, 
    },
    primary:{
	  //light: '#757ce8',	
	  main:'#fff',
	  //dark: '#002884',
	  contrastText: '#000',
    },
    secondary:{
	  //main:`${colorSecondary}`
	  //light: '#ff7961',
      main: '#0d47a1',
      //dark: '#ba000d',
      contrastText: '#fff',
    },
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
    },
    links:{
       //color:"black", 
    }
  },
  
})