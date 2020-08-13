import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#00838f";
const arcOrange = "#FFBA60";

export default createMuiTheme({

  palette:{
    common:{

      arcBlue:`${arcBlue}`,
      arcOrange:`${arcOrange}`, 
    },
    primary:{
      main:`${arcBlue}`
    },
    secondary:{
      main:`${arcOrange}`
    }
  },
  typography:{

    tab:{
      fontFamily:"Raleway",
      textTransform:"none",
      fontWeight:700,
      fontSize:'1rem',
    },
    signin:{
      borderRadius:"50px",
      marginLeft:"50px",
      marginRight:"25px",
      fontFamily:"Pacifico",
      fontSize:'1rem',
      textTransform:"none",
      color:"white"
    },
    links:{
       color:"white", 
    }
  },
  
})