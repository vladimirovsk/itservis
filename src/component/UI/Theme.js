import { createMuiTheme } from '@material-ui/core/styles';
const colorPrimary = "#fff"; //white
const colorSecondary = "#0d47a1"; //blue

export default createMuiTheme({
  palette:{
	  //type:'dark',//"light", //dark
     common:{
       colorPrimary:`${colorPrimary}`,
       colorSecondary:`${colorSecondary}`
     },
     primary:{
        light: '#fff',
        main:'#fff',
	    dark: '#002884',
	    contrastText: '#000',
     },
     secondary:{
        light: '#0d47a1',
        main: '#0d47a1',
        dark: '#0d47a1',
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
      outline: 'none',
      borderRadius:"50px",
      marginLeft:"50px",
      marginRight:"25px",
      fontSize:'1rem',
      textTransform:"upper",
    },
    links:{
       color:"black",
    }

  },
  
})