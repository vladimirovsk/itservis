import React, {useEffect, useStyles, useState} from "react";
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
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
    height:"4em"
  },
  
  logoContainer:{
    padding:'5px',
    "&:hover":{
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
    marginLeft:'5em',
   },
   button:{
     ...theme.typography.signin,
      
      height:"45px",
   }
}));

function Headers (props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchoeEl] =  useState(null)
  const [open, setOpen] = useState(false)
  const classes = thStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchoeEl(e.currentTarget)
    setOpen(true)
  }

  const handleClose = (e) => {
    setAnchoeEl(null)
    setOpen(false)
  }
  //Для возможности роутинга по страницам без перезагрузки сайта
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
            <img alt="logo" src={logo} className={classes.logo} />
          </Button>
              <Tabs 
              aria-label="simple tabs example"
                className={classes.tabContainer} value={value} 
                onChange={handleChange}
                indicatorColor="secondary"
              >

                <Tab className={classes.tab} component={Link} to='/' label="Home"/>
                <Tab 
                  aria-owns={anchorEl ? "simple-menu": undefined}
                  aria-haspopup={anchorEl ? "true": undefined}
                  onMouseOver={event => handleClick(event)}
                  className={classes.tab} 
                  component={Link} 
                  to='/Project' 
                  label="Project"/>
                <Tab className={classes.tab} component={Link} to='/About' label="About"/>
              </Tabs>
              <Button component={Link} variant="contained" color="secondary" className={classes.button}>  
                Sign in
              </Button>
              <Menu id="simple-menu" anchorEl={anchorEl} open={open}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
              >
                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project'>
                CustomSoft
                </MenuItem>  
                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project'>
                Mobile software
                </MenuItem>  
                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project' >
                Network software
                </MenuItem>  
              </Menu>  
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

