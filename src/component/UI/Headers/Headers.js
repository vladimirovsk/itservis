import React, {useEffect, useStyles, useState} from "react";
import {connect} from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import logo from '../../../assets/logo.png'; 
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import Theme from "../Theme";

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
   },

   button:{
     ...theme.typography.signin,
      height:"45px",
   },
 
   menu:{
     backgroundColor: theme.palette.common.arcBlue,
	 color  :"white",
	 borderRadius:'0px'
   },
   menuItem:{
	...theme.typography.tab,
	opacity:0.7,
	"&:hover": {
		opacity:1,
		color:"red"

	},
	
	selected: { /* Increase the specificity */
		color: "green"
   }
  }
}));

function Headers (props) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")) 
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
			label="Home"
          />
          <Tab 
            className={classes.tab} 
            component={Link} 
			to='/Project' 
			label="Project"
			aria-haspopup="true"
      
            aria-owns={anchorEl ? "simple-menu": undefined}
            //aria-haspopup={anchorEl ? "true": undefined}
            onMouseOver={(event) => handleClick(event)}
          />
          <Tab 
            className={classes.tab} 
            component={Link} 
            to='/About' 
			label="About"
	
			/>
		</Tabs>
              
		<Button component={Link} 
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
				//keepMounted
				classes={{paper: classes.menu}}
				elevation={0}
              >
                <MenuItem 
					onClick={()=>{handleClose(); setValue(1)}} 
					component={Link} 
					to='/Project'
					classes={{root: classes.menuItem}}
					pathname="/Project"
				>
					Project
				</MenuItem>

                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project' pathname="/Project">
                CustomSoft
                </MenuItem>  
                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project' pathname="/Project">
                Mobile software
                </MenuItem>  
                <MenuItem onClick={()=>{handleClose(); setValue(1)}} component={Link} to='/Project' pathname="/Project">
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
		//disableGutters={true}
		>
          <Button component={Link} to="/" 
          disableRipple
          className={classes.logoContainer}> 
            <img alt="logo" src={logo} className={classes.logo} />
          </Button>

              {matches ? null: tabs}
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

