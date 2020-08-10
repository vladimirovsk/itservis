import React, {Component, useStyles, useState} from "react"
import {connect} from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {makeStyles} from '@material-ui/styles';
import {useMediaQuery, AppBar, useScrollTrigger, Toolbar, Button, Tabs, Tab, Menu, MenuItem} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles'
import logo from '../../../assets/logo.png'; 
import {Link} from 'react-router-dom';



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
        theme: null,//useTheme(),
		matches: null,//useMediaQuery(this.theme.breakpoints.down("md")),
		anchorEl:null,
		classes:this.thStyles(),
		open:false,
		tabs:this.tabs
	  }
	  
	  this.handleClick = this.handleClick.bind(this);
	  this.handleClose = this.handleClose.bind(this);
	}

	thStyles = () => makeStyles(theme => ({
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

	tabs = () =>(
		<React.Fragment>
		 <Tabs 
			aria-label="simple tabs example"
			className={this.classes.tabContainer} 
			value={this.value} 
			  //onChange={handleChange}
			indicatorColor="secondary"
		 >
		   <Tab
			 className={this.classes.tab} 
			 component={Link}  
			 to='/'
			 label="Home"
		   />
		   <Tab 
			 className={this.classes.tab} 
			 component={Link} 
			 to='/Project' 
			 label="Project"
			 aria-haspopup="true"
	   
			 aria-owns={this.anchorEl ? "simple-menu": undefined}
			 //aria-haspopup={anchorEl ? "true": undefined}
			 onMouseOver={(event) => this.handleClick(event)}
		   />
		   <Tab 
			 className={this.classes.tab} 
			 component={Link} 
			 to='/About' 
			 label="About"
	 
			 />
		 </Tabs>
			   
		 <Button component={Link} 
			 variant="contained" 
			 color="secondary" 
			 className={this.classes.button}
		 >  
		 Sign in
		 </Button>
		 
			   <Menu 
				 id="simple-menu" 
				 anchorEl={this.anchorEl} 
				 open={this.open}
				 //component={Link}
				 //onClose={handleClose}
				 MenuListProps={{onMouseLeave: this.handleClose}}
				 //keepMounted
				 classes={{paper: this.classes.menu}}
				 elevation={0}
			   >
				 <MenuItem 
					 //onClick={()=>{handleClose(); setValue(1)}} 
					 component={Link} 
					 to='/Project'
					 classes={{root: this.classes.menuItem}}
					 pathname="/Project"
				 >
					 Project
				 </MenuItem>
 
				 <MenuItem className={this.classes.menuItem} 
				///	onClick={()=>{this.handleClose(); setValue(1)}} 
					 component={Link} 
					 to='/Project' 
					 pathname="/Project">
				 CustomSoft
				 </MenuItem>  
				 <MenuItem className={this.classes.menuItem} 
				//	onClick={()=>{this.handleClose(); setValue(1)}} 
					component={Link} 
					to='/Project' 
					pathname="/Project"
				  >
				 Mobile software
				 </MenuItem>  
				 <MenuItem className={this.classes.menuItem} 
				// onClick={()=>{this.handleClose(); setValue(1)}} 
				 component={Link} 
				 to='/Project' 
				 pathname="/Project">
				 Network software
				 </MenuItem>  
			   </Menu>  
		</React.Fragment>
   )
	 
   handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
    console.log(event.target);
  };

	componentDidMount() {
		console.log(this.props)
		//this.setState({theme:useTheme});
		//console.log(thStyles);
		//this.setState({classes: this.thStyles()});
		//this.setState({open: false});
		//this.setState({matches: useMediaQuery(this.theme.breakpoints.down("md"))})
	}
	



      render () {
		const {t} = this.props;

		//this.setState({theme:useTheme});
		//setValue = () => this.setState(false);
		//this.setState({value:this.useState(0)})
		//const [value, setValue] = useState(0);
		//this.setState({theme:useTheme});
		//const matches = useMediaQuery(theme.breakpoints.down("md")) 
		//const [anchorEl, setAnchoeEl] =   this.state;//useState(null)
		//const [open, setOpen] = useState(false)
		//const [state, setstate] = useState(initialState)
		//this.setState({classes:this.thStyles});
		//const [open, setOpen] = useState(false)
		//const classes = thStyles();


		  
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
				{this.props.tabs}	
          	</Toolbar>				  

			 </AppBar>      
			</ElevationScroll>
			</React.Fragment>
		)
    }

  }

 
function mapStateToProps(state){
  //console.log(new Date(localStorage.getItem('expirationDate')))
  //console.log(new Date(state.auth.expData))
  return{
      isAuth: !!state.auth.token,
      stDate: new Date(state.auth.expData)
  }
}

  export default connect(mapStateToProps) (translate(withStyles(useStyles) (Headerscls)));