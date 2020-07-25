import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Botton from '@material-ui/core/Button'
import logo from '../../../assets/logo.png'; 


function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin:{
    ...theme.mixins.toolbar,
    marginBottom:"1em",

  },
  logo:{
    height:"1rem"
  },
  tabContainer:{
    marginLeft:'auto',
  },
  tab:{
    fontStyle: 'bold',
    fontFamily:"Raleway",
    fontWeight:500,
    fontSize:'1rem',
    minWidth:10,
    marginLeft:'25px',
   }
}));

export default function(props){
  const [value, setValue] = React.useState(1);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return(
    <React.Fragment>
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters={true}>
        <img alt="logo" src={logo} classNam={classes.logo} />
              <Tabs 
              aria-label="simple tabs example"
                className={classes.tabContainer} value={value} 
                onChange={handleChange}
                indicatorColor="secondary"
              >

                <Tab className={classes.tab} Font label="Home"/>
                <Tab className={classes.tab} label="Service"/>
                <Tab className={classes.tab} label="About"/>
              </Tabs>
          </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

//            <img alt="logo" src={logo} classNam={classes.logo}/ >

