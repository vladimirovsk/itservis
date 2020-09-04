import React, {useEffect, useStyles, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { makeStyles, useTheme} from "@material-ui/core/styles";
import { withStyles} from "@material-ui/styles";
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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from "@material-ui/icons/Menu"; 
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const thStyles = makeStyles( theme => ({
  toolbarMargin:{
    ...theme.mixins.toolbar
  },

  toolbarMarginDrawer:{
    ...theme.mixins.toolbar,
    marginBottom:"1em"
  },

  logo:{
	height:"5em",
	[theme.breakpoints.down("md")]:{
	height:"4em"  },
	[theme.breakpoints.down("sm")]:{
		height:"3em"  }
  },

  logoContainer:{
    outline: 'none',
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
     outline: 'none',
    width:'6em',
	  //height:"45px",
   },
 
   menu: {
    //backgroundColor: theme.palette.common.primary,
    color  : theme.typography.caption,//"black",
    borderRadius:'0px',
    //"&:hover":{
	  //color:"black",
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
  drawerIcon:{
    height: '30px',
    width: '30px',

  },
  drawerIconContainer:{
    marginLeft:"auto", 
    "&:hover": {
      backgroundColor:"transparent",
      borderColor:"transparent"
    }
  },
  drawer:{
    backgroundColor: theme.palette.common.primary,
    
  },
  drawerItem:{
    ...theme.typography.tab,
    opacity: 0.5

  },

  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  appbar:{
    zIndex: theme.zIndex.modal+1
  }

  
}));

function Headers (props) {

  const [value, setValue] = useState(0);
  //const [anchorEl, setAnchoeEl] =  useState(null)
  const [anchorEl2, setAnchorEl2] =  useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const classes = thStyles();
  const theme = useTheme();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false); 

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [{t, isAuth}] = useState(props)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  /*const handleClick = (event) => {
    	setAnchoeEl(event.currentTarget)
    	setSelectedIndex(event.currentTarget.index);
    	setOpenMenu(true)
  }*/

  //const handleClose = (event) => {
	//    setAnchoeEl(null)
  //    setOpenMenu(false)
  //}

  const handleClickLng = (event) => {
    setOpenMenu(true)
		setAnchorEl2(event.currentTarget);
  }

  const handleCloseLng = (event) => {
		  setOpenMenu(false)
	  	setAnchorEl2(null)
  }

  const handleChangeLg = (event, lng) => {
	  console.log(event.currentTarget.value, lng)
		setLanguage(lng);
		setAnchorEl2(null)
		setOpenMenu(false)
  };

  /*const route = [
    {name: "Home", link: '/', activeIndex:0 }, 
    {name: "Project", link: '/project', activeIndex:1},
    {name: "About", link: '/about', activeIndex:2},
    {name: "Auth", link: '/auth', activeIndex:3},
  ]
*/
  //Для возможности роутинга по страницам без перезагрузки сайта
  useEffect(() => {
    
   /* [...route].forEach(route => {
      
      switch (window.location.pathname){
        case `$(route.link)`:
          if (value !== route.activeIndex){
            setValue(route.activeIndex)
              if (route.selectedIndex && route.selectedIndex !== selectedIndex){
                setSelectedIndex(route.selectedIndex)
                console.log(route.selectedIndex)
              }
            }
          break;
        default:
          break;
      }   
    }
    )
  }, [value, selectedIndex, route]);
*/
    if (window.location.pathname === "/" && value !== 0){
      setValue(0)
    }else if  (window.location.pathname === "/project" && value !==  1) {
      setValue(1)
    }else if  (window.location.pathname === "/about" && value !==  2) {
      setValue(2)
    } else if  (window.location.pathname === "/auth" && value !==  3) {
     setValue(3)
     
  } 
  }, [value]); 

  const lngButton = (
    <React.Fragment>
      <Button 
        hidden = {false}
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
        open={openMenu}//{Boolean(anchorEl2)}
        onClose={handleCloseLng}
        classes={{paper: classes.menu}}
        style={{zIndex: 5402 }}
        MenuListProps={{
          onMouseLeave: handleCloseLng
        }}
		>
			      <MenuItem onClick={(event) => {handleChangeLg(event, 'en'); setOpenDrawer(false); setOpenMenu(false)}} className={classes.menuItem} selected={1 === selectedIndex} >EN</MenuItem>
          	<MenuItem onClick={(event) => {handleChangeLg(event, 'ru'); setOpenDrawer(false); setOpenMenu(false)}} className={classes.menuItem} selected={2 === selectedIndex} >RU</MenuItem>
          	<MenuItem onClick={(event) => {handleChangeLg(event, 'pl'); setOpenDrawer(false); setOpenMenu(false)}} className={classes.menuItem} selected={3 === selectedIndex}  >PL</MenuItem>
      </Menu>	
    </React.Fragment>
  )

  const tabs =(
	   <React.Fragment>
    	<Tabs 
			aria-label="simple tabs example"
			className={classes.tabContainer} 
			value={value} 
			onChange={handleChange}
      indicatorColor="secondary"
      scrollButtons="auto"
        >
          <Tab
            className={classes.tab} 
            selected ={value === 0}
            component={Link}  
            to='/'
            label={t('navbar.glavn')}
            onClick={()=>setValue(0)}
            
          />
		      <Tab 
            hidden = {false}
            selected ={value === 1}
            className={classes.tab} 
            component={Link} 
            to='/Project' 
            label={t('navbar.project')}
            onClick={()=>setValue(1)}

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
        selected ={value === 2}
        className={classes.tab} 
        component={Link} 
        to='/about' 
        label ={t('navbar.kontact')}
        onClick={()=>setValue(2)}
			/>
      <Tab 
        selected ={value === 3}
			  hidden = {false}
        //hidden={props.isAuth}
        className={classes.tab} 
        component={Link} 
        to={isAuth ?'/logout' :'/auth'} 
        label ={isAuth ?t('navbar.logout') :t('navbar.login')}
        onClick={()=>setValue(3)}
			/>
		</Tabs>          
      {lngButton}
	   </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        open={openDrawer}
        onClose = {()=> {setOpenDrawer(false); setOpenMenu(false)}}
        onOpen ={()=> {setOpenDrawer(true); setOpenMenu(false)}}
        classes = {{paper: classes.drawer}}
        >
          <div className={classes.toolbarMarginDrawer} />
          <List disablePadding>
            
            <ListItem  
                divider button component={Link} to="/" 
                onClick={()=>{setOpenDrawer(false); setValue(0)}} 
                selected={value===0}
                classes={{selected: classes.drawerItemSelected}} 
              >
              <ListItemText className={classes.drawerItem} 
                disableTypography>{t('navbar.glavn')}</ListItemText>
            </ListItem>
            <ListItem classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/project" onClick={()=>{setOpenDrawer(false); setValue(1)}} selected={value===1}>
              <ListItemText className={classes.drawerItem } 
                disableTypography>{t('navbar.project')}</ListItemText>
            </ListItem>
            <ListItem classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/about" onClick={()=>{setOpenDrawer(false); setValue(2)}} selected={value===2}>
              <ListItemText className={classes.drawerItem } 
                disableTypography>{t('navbar.kontact')}</ListItemText>
            </ListItem>
            <ListItem classes={{selected: classes.drawerItemSelected}} divider button component={Link} to="/auth" onClick={()=>{setOpenDrawer(false); setValue(3)}} selected={value===3}>
              <ListItemText className={classes.drawerItem } 
                disableTypography>{isAuth ? t('navbar.logout') :t('navbar.login')}</ListItemText>
            </ListItem>
            <ListItem>
              {lngButton}
            </ListItem>
          </List>

          

      </SwipeableDrawer> 
      <IconButton 
        className={classes.drawerIconContainer}
        onClick={()=> setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon 
          className={classes.drawerIcon}
        />
      </IconButton>
    </React.Fragment>
  )
  return(
    <Container>
    
      <AppBar position="fixed" className={classes.appbar} color="primary">
        <Toolbar 
        disableGutters={true}
        >
          <Button component={Link} to="/" onClick={()=>setSelectedIndex(1)}
            disableRipple
            className={classes.logoContainer}> 
            <img alt="logo" src={logo} className={classes.logo} />
          </Button>
              {matches ? drawer : tabs}
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
/*
<Menu 		    
			id="simple-menu" 
			anchorEl={anchorEl} 
			open={openMenu}
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
    /*
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
*/