import React, {useEffect, useStyles, useState} from "react";
import {connect} from "react-redux";
//import {NavLink} from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import NavLink from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import logo from '../../../assets/logo.png'; 
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'

import {translate } from 'react-switch-lang';

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
    marginBottom:"3em",
  },

  logo:{
	height:"4em",
	[theme.breakpoints.down("md")]:{
	height:"3em"  },
	[theme.breakpoints.down("sm")]:{
		height:"2em"  }
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
	...theme.typography.tab,
	  minWidth:10,
    marginLeft:'25px',
    "&:hover":{
      color:"white"
    }
   },

   button:{
     ...theme.typography.signin,
      height:"45px",
   },
 
   menu:{
      backgroundColor: theme.palette.common.arcBlue,
	    color  :"white",
      borderRadius:'0px',
      "&:hover":{
        color:"white"
      }

      
   },
   menuItem:{
	...theme.typography.tab,
    opacity:0.7,
    
	  "&:hover": {
  		color:"white"
	},
	
  }
}));

function Headers (props) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")) 
  const [anchorEl, setAnchoeEl] =  useState(null)
  const [open, setOpen] = useState(false)
  const classes = thStyles();

  const [{t}] = useState(props)
  console.log(t('navbar.dashboard'));

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

  const tabs =(
	   <React.Fragment>
        <Tabs 
         	aria-label="simple tabs example"
		    	className={classes.tabContainer} 
			    value={value} 
         	onChange={handleChange}
          indicatorColor="secondary"
        >
          <Tab
			className={classes.tab} 
			component={NavLink}  
			to='/'
			label="Home"
          />
          <Tab 
            className={classes.tab} 
            component={NavLink} 
			to='/Project' 
			label="Project"
			aria-haspopup="true"
			aria-controls="simple-menu"
            aria-owns={anchorEl}
            //aria-haspopup={anchorEl ? "true": undefined}
            onMouseOver={(event) => handleClick(event)}
          />
          <Tab 
            className={classes.tab} 
            component={NavLink} 
            to='/About' 
			      label="About"
	
			/>
		</Tabs>
              
		<Button component={NavLink} 
			variant="contained" 
      		color="secondary" 
			className={classes.button}
		>  
		Sign in
		</Button>
		
              <Menu 
				id="simple-menu" 
				anchorEl={anchorEl} 
				open={open}
				//component={Link}
				//onClose={handleClose}
				MenuListProps={{onMouseLeave: handleClose}}
				keepMounted
				classes={{paper: classes.menu}}
				elevation={0}
              >
                <MenuItem 
					onClick={()=>{handleClose(); setValue(1)}} 
					component={NavLink} 
					to='/Project'
					classes={{root: classes.menuItem}}
					pathname="/Project"
				>
					Project
				</MenuItem>

                <MenuItem className={classes.menuItem} onClick={()=>{handleClose(); setValue(1)}} component={NavLink} to='/Project' pathname="/Project">
                CustomSoft
                </MenuItem>  
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose(); setValue(1)}} component={NavLink} to='/Project' pathname="/Project">
                Mobile software
                </MenuItem>  
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose(); setValue(1)}} component={NavLink} to='/Project' pathname="/Project">
                Network software
                </MenuItem>  
              </Menu>  
	   </React.Fragment>
  )
    
  return(
    <React.Fragment>
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar 
        disableGutters={true}
        >
          <Button component={NavLink} to="/" 
          disableRipple
          className={classes.logoContainer}> 
            <img alt="logo" src={logo} className={classes.logo} />
          </Button>
              {tabs}
          </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

function mapStateToProps(state){
  //console.log(new Date(localStorage.getItem('expirationDate')))
  //console.log(new Date(state.auth.expData)
  return{
    isAuth: !!state.auth.token,
    stDate: new Date(state.auth.expData)
  }
}

export default connect(mapStateToProps) (translate(withStyles(useStyles) (Headers)));

