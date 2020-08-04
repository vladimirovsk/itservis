import React, {Component, useStyles} from "react"
import {connect} from "react-redux";
import { withStyles, useTheme } from "@material-ui/core/styles";
import {makeStyles} from '@material-ui/styles';
import {useMediaQuery, AppBar, useScrollTrigger, Toolbar, Button, Link} from '@material-ui/core';
import logo from '../../../assets/logo.png'; 
import Theme from "../Theme";


import {
   // setLanguage,
    //getLanguage,
    translate,
  } from 'react-switch-lang';



  class Headerscls extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        theme: 0,//useTheme(),
		matches: null,//useMediaQuery(this.theme.breakpoints.down("md")),
		anchorEl:null,
		classes:0,


      }
	}
	

	componentDidMount() {
		this.setState({theme:useTheme});
		//console.log(this.);
		//this.setState({classes: thStyles()});
		//this.props.classes = useTheme();
    }


      render () {
		const {t} = this.props;
		


		  
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

        return(
			<React.Fragment>
			<ElevationScroll>
			  <AppBar position="fixed" color="primary">
			  <Toolbar disableGutters={true}>
				<Button component={Link} to="/" 
				disableRipple
				className={this.props.classes.logoContainer}> 
				<img alt="logo" src={logo} className={this.props.classes.logo} />
			</Button>
					
          	</Toolbar>				  

			 </AppBar>      
			</ElevationScroll>
			</React.Fragment>
		)
    }

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

 
function mapStateToProps(state){
  //console.log(new Date(localStorage.getItem('expirationDate')))
  //console.log(new Date(state.auth.expData))
  return{
      isAuth: !!state.auth.token,
      stDate: new Date(state.auth.expData)
  }
}

  export default connect(mapStateToProps) (translate(withStyles(useStyles) (Headerscls)));