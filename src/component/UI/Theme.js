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
    h4:{
      fontWeight: 10
    }
  }
})