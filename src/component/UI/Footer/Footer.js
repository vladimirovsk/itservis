import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"
//import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
//import FacebookIcon from '@material-ui/icons/Facebook';
//import facebookIcon from '../../../assets/facebook.svg';
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
  footer:{
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    marginTop:theme.spacing(5),
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
        <Typography className={classes.footer}  variant="body2" color="textSecondary" align="center">
            {' © '}
            <Link color="inherit" href="https://it-vladimirov.com">
                Sergey Vladimirov
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </footer>

  )
}

export default Footer;
