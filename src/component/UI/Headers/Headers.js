import React, {useEffect, useStyles, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { makeStyles, withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import logo from '../../../assets/logo.png'; 
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//import {Link, animateScroll as scroll } from "react-scroll"
import {translate ,getLanguage, setLanguage } from 'react-switch-lang';
import { Container } from "@material-ui/core";


const thStyles = makeStyles(theme => ({
  toolbarMargin:{
    ...theme.mixins.toolbar,
    //marginBottom:"3em",
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
      color: "black"
    }
   },

   buttonLng:{
     ...theme.typography.button,
	  height:"45px",
   },
 
   menu: {
      backgroundColor: theme.palette.common.arcBlue,
		color  :"black",
      borderRadius:'0px',
      //"&:hover":{
	//	color:"black",
     // },
   },
   menuItem:{
	...theme.typography.tab,
    opacity:0.7,
	borderRadius:'0px',
	
	//  "&:hover": {
  	//	color:"black"
	//},
	
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

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchoeEl] =  useState(null)
  const [anchorEl2, setAnchorEl2] =  useState(null)
  const [open, setOpen] = useState(false)
  const classes = thStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [{t}] = useState(props)

  console.log(props.isAuth);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    	setAnchoeEl(event.currentTarget)
    	setSelectedIndex(event.currentTarget.index);
    	setOpen(true)
  }

  const handleClose = (event) => {
	  setAnchoeEl(null)
      setOpen(false)
  }

  const handleClickLng = (event) => {
		setAnchorEl2(event.currentTarget);
  }

  const handleCloseLng = (event) => {
		setOpen(false)
	  	setAnchorEl2(null)
  }

  const handleChangeLg = (event, lng) => {
	  console.log(event.currentTarget.value, lng)
		setLanguage(lng);
		setAnchorEl2(null)
		setOpen(false)
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
		  hidden = {false}
            className={classes.tab} 
            component={Link} 
            to='/Project' 
            label={t('navbar.project')}
            //aria-haspopup="true"
      //      aria-controls="simple-menu"
			//      aria-owns={anchorEl}
			//      aria-haspopup={anchorEl ? "true": undefined}
			//     onMouseOver={(event) => handleClick(event)}
			//onClick={(event) => handleClick(event)}
            //icon={<ArrowDropDownIcon/>}
      //      wrapped={false}

          />
      <Tab 
        hidden = {false}
        className={classes.tab} 
        component={Link} 
        to='/about' 
        label ={t('navbar.kontact')}
			/>
			<Tab 
			 hidden = {true}
        //hidden={props.isAuth}
        className={classes.tab} 
        component={Link} 
        to='/auth' 
        label ={t('navbar.login')}
			/>
			
			<Tab 
			 hidden = {true}
		  	//hidden={!props.isAuth}
        className={classes.tab} 
        component={Link} 
        to='/logout' 
        label ={t('navbar.logout')}
			/>


		</Tabs>
              
      
      <Button 
        hidden = {true}
        variant="contained"
        color="secondary"
        className={classes.buttonLng}
		    onClick={handleClickLng}
		    endIcon={<ArrowDropDownIcon/>}
		  >
        {getLanguage()}
      </Button>

    	<Menu
			id="simple-menu-lng"
			anchorEl={anchorEl2}
			keepMounted
			open={Boolean(anchorEl2)}
			onClose={handleCloseLng}
			classes={{paper: classes.menu}}
		>
			<MenuItem onClick={(event) => handleChangeLg(event, 'en')} className={classes.menuItem} selected={1 === selectedIndex} >EN</MenuItem>
          	<MenuItem onClick={(event) => handleChangeLg(event, 'ru')} className={classes.menuItem} selected={2 === selectedIndex} >RU</MenuItem>
          	<MenuItem onClick={(event) => handleChangeLg(event, 'pl')} className={classes.menuItem} selected={3 === selectedIndex}  >PL</MenuItem>
      	</Menu>	

		<Menu 
		    
			id="simple-menu" 
			anchorEl={anchorEl} 
			open={open}
			component={Link}
			onClose={handleClose}
			MenuListProps={{onMouseLeave: handleClose}}
			keepMounted
			classes={{paper: classes.menu}}
			elevation={0}
	
			/*getContentAnchorEl={null}
			anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
			}}
			transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
			}}*/
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
  return(
    <Container>
    
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
 
    <div className={classes.toolbarMargin}/>
    </Container>
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

