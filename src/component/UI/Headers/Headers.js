import React, {useEffect, useStyles, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
//import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import logo from '../../../assets/logo.png'; 
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import InputLabel from '@material-ui/core/InputLabel'

import {translate, getDefaultLanguage, setLanguage } from 'react-switch-lang';

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
	height:"5em",
	[theme.breakpoints.down("md")]:{
	height:"4em"  },
	[theme.breakpoints.down("sm")]:{
		height:"3em"  }
  },

  logoContainer:{

    padding:'10px',
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
 
   menu: {
      backgroundColor: theme.palette.common.arcBlue,
	    color  :"white",
      borderRadius:'0px',
      "&:hover":{
		color:"white",
      },
   },
   menuItem:{
	...theme.typography.tab,
    opacity:0.7,
    borderRadius:'0px',
	  "&:hover": {
  		color:"white"
	},
	
  },

  formControl: {
   margin: theme.spacing(1),
	minWidth: 60,
	
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    borderRadius: 4,
    borderColor: '#80bdff',
	boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
	
},
  
}));

function Headers (props) {

  const [langauge, setLang] = React.useState(getDefaultLanguage());
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")) 
  const [anchorEl, setAnchoeEl] =  useState(null)
  const [anchorEl2, setAnchorEl2] =  useState(null)
  const [open, setOpen] = useState(false)
  const classes = thStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [{t}] = useState(props)
  //console.log(t('navbar.dashboard'));

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchoeEl(e.currentTarget)
    setSelectedIndex(e.currentTarget.index);
    setOpen(true)
  }

  const handleClose = (e) => {
	setAnchoeEl(null)
    setOpen(false)
  }

  const handleClickLng = (event) => {
	setAnchorEl2(event.currentTarget);
  }
  const handleCloseLng = (e) => {
	setAnchorEl2(null)
  }

  const handleChangeLg = (event) => {
	  console.log(event.target.value)
    setLang(event.target.value);
    setLanguage(event.target.value);
  };

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
			component={Link}  
			to='/'
      		label={t('navbar.glavn')}
          />
          <Tab 
            className={classes.tab} 
            component={Link} 
			      to='/Project' 
			      label={t('navbar.project')}
			      //aria-haspopup="true"
			      aria-controls="simple-menu"
            aria-owns={anchorEl}
            aria-haspopup={anchorEl ? "true": undefined}
//            onMouseOver={(event) => handleClick(event)}
            onClick={(event) => handleClick(event)}

          />
          <Tab 
            className={classes.tab} 
            component={Link} 
            to='/about' 
            label ={t('navbar.kontact')}
	
			    />
		</Tabs>
              
    <Button 
       tabindex="0" 
       type="button" 
       aria-haspopup="true" 
	   aria-label="Сменить язык" 
	   aria-controls="simple-menu"
       title="Сменить язык"
	   onClick={handleClickLng}>
		onChange={handleChangeLg}
		   {getDefaultLanguage()}
    </Button>

    	<Menu
			id="simple-menu"
			anchorEl={anchorEl2}
			keepMounted
			open={Boolean(anchorEl2)}
			onClose={handleCloseLng}
		>
		  <MenuItem  selected={1 === selectedIndex} value={'en'} >EN</MenuItem>
          <MenuItem  selected={2 === selectedIndex} value={'ru'} >RU</MenuItem>
          <MenuItem  selected={3 === selectedIndex} value={'pl'} >PL</MenuItem>

      	</Menu>
		


              <Menu 

			  	id="simple-menu" 
				  anchorEl={anchorEl} 
				  open={open}
				  //component={Link}
				  onClose={handleClose}
				  MenuListProps={{onMouseLeave: handleClose}}
				  //keepMounted
				  classes={{paper: classes.menu}}
          elevation={0}
        
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          //{...props}
              >
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project' pathname="/Project">
                CustomSoft
                </MenuItem>  
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project' pathname="/Project">
                Mobile software
                </MenuItem>  
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project' pathname="/Project">
                Network software
                </MenuItem>  
              </Menu>  
	   </React.Fragment>
  )
    console.log(langauge)
  return(
    <React.Fragment>
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar 
        disableGutters={true}
        >
          <Button component={Link} to="/" 
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

