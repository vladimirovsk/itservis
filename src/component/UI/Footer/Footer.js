import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"
//import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
//import FacebookIcon from '@material-ui/icons/Facebook';
import facebookIcon from '../../../assets/facebook.svg';


const useStyles = makeStyles(theme => ({
  footer:{
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    marginTop:theme.spacing(3),
    zIndex: 1302,
    textAlign:'center',
    verticalAlignment:"bottom"
  },
  abornment: {
    width: "25em",
    verticalAlignment:"bottom"
  },
  icon: {
    width: '3em',
    heigh: '3em',
    
  },
  paper:{
    width: "100%",
    textAlign:'center',
    
  }
}));

function Footer(){
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
 
         <Typography className={classes.footer} align="center" color="textSecondary" component="p" variant="caption">
                <a href="it-vladimirov.com" rel="noopener noreferrer" target="_blank" >@ Designed 2020</a>
          </Typography>
          <Typography hidden={true} align="center" component={"a"} href="https://www.facebook.com/itservis.od.ua" rel="noopener noreferrer" target="_blank"  >
              <img className={classes.icon} src={facebookIcon} alt="facebook/itservis.od.ua"/> 
          </Typography>
    </footer>

  )
}

export default Footer;