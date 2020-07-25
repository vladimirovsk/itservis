import React, {useEffect, useStyles} from "react";
import {connect} from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import logo from '../../../assets/logo.png'; 
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'

import {
  setLanguage,
  getLanguage,
  translate,
} from 'react-switch-lang';

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

const thStyles = makeStyles(theme => ({
  toolbarMargin:{
    ...theme.mixins.toolbar,
    marginBottom:"5em",

  },
  logo:{
    height:"2rem"
  },
  logoContainer:{
    padding:'0',
    "&:hober":{
      backgroundColor:"transparent"
    }
  },
  tabContainer:{
    marginLeft:'auto',
  },
  tab:{
    fontStyle: 'bold',
    fontFamily:"Raleway",
    fontWeight:700,
    fontSize:'1rem',
    minWidth:10,
    marginLeft:'25px',
   }
}));

function Headers (props) {
  const [value, setValue] = React.useState(1);

  const classes = thStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0){
      setValue(0)
    }else if  (window.location.pathname === "/project" && value !==  1) {
      setValue(1)
    }else if  (window.location.pathname === "/about" && value !==  2) {
      setValue(2)
    } 
  }, [value]); 
    
  return(
    <React.Fragment>
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters={true}>
          <Button component={Link} to="/" 
          disableRipple
          className={classes.logoContainer}> 
            <img alt="logo" src={logo} classNam={classes.logo} />
          </Button>
              <Tabs 
              aria-label="simple tabs example"
                className={classes.tabContainer} value={value} 
                onChange={handleChange}
                indicatorColor="secondary"
              >

                <Tab className={classes.tab} component={Link} to='/' label="Home"/>
                <Tab className={classes.tab} component={Link} to='/Project' label="Project"/>
                <Tab className={classes.tab} component={Link} to='/About' label="About"/>
              </Tabs>
          </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

function mapStateToProps(state){
  //console.log(new Date(localStorage.getItem('expirationDate')))
  //console.log(new Date(state.auth.expData))
  return{
      isAuth: !!state.auth.token,
      stDate: new Date(state.auth.expData)
  }
}

export default connect(mapStateToProps) (translate(withStyles(useStyles) (Headers)));
//            <img alt="logo" src={logo} classNam={classes.logo}/ >

