import React, {useState} from "react";
import './About.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone, faAddressCard, faCity, } from '@fortawesome/free-solid-svg-icons';

import {translate} from "react-switch-lang";
import { Container, Paper } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        margin: 'auto',
        borderRadius: theme.spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        marginTop: theme.spacing(8),
        maxWidth: 1000,
        
        //absolute
        //fixed
        //relative
        //static
        //sticky
        
        //marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
        //[breakpoints.up('md')]: {
        //  flexDirection: 'row',
        //  paddingTop: spacing(2),
        //},
      },
      paper: {
        height:"100%",
        width:"100%",
        padding:theme.spacing(2),
        //textAlign: 'center',
        //color: theme.palette.text.secondary,
      },

      container: {
          marginTop: theme.spacing(6),
        height: "600px"
      },
      item:{
          marginTop:theme.spacing(1),
          flex:1    
      }
    }));

function About (props ) {
    const [{t}] = useState(props);
    const classes = useStyles();
    return (
        <Container>
            <Grid container className={classes.container} spacing={5} bgcolor={'red'}>
                <Grid item xs={8} >
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h4" align="center" style={{marginTop:'2em'}}>
                               {t("contact.block4.header")}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em'}}>
                               {t('contact.block4.text1')}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em'}}>
                               {t('contact.block4.text2')}
                        </Typography>
                        <hr />
                        <div align="center">
                        <Typography>
                            <FontAwesomeIcon icon={faCoffee}/>&nbsp; 
                            {t('kontact.title')}
                        </Typography>        
                        <Typography hidden={true}>
                            <FontAwesomeIcon icon={faCity}/>&nbsp; 
                            {t('kontact.city')}
                        </Typography>  
                        <Typography>
                            <FontAwesomeIcon icon={faPhone}/>&nbsp; 
                            {t('kontact.phone')}
                        </Typography>
                        <Typography>
                            <FontAwesomeIcon icon={faAddressCard}/>&nbsp; 
                            <a className="mail" href="mailto:admin@citypay.org.ua"><u>sergey@itservis.od.ua</u></a>
                        </Typography>
                        </div>
                        </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Grid 
                        direction="column"
                        container
                        className={classes.box}
                    >
                    <Grid className={classes.item} item>
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h5" component="h4" align="center">
                                {t("contact.block1.header")}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em'}}>
                            {t('contact.block1.text')}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid className={classes.item} item>
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h5" component="h4" align="center">
                                {t("contact.block2.header")}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em'}}>
                                {t('contact.block2.text')}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid className={classes.item} item>
                    <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h5" component="h4" align="center">
                                {t("contact.block3.header")}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em'}}>
                                {t('contact.block3.text')}
                            </Typography>
                        </Paper>
                    </Grid>
                    </Grid>
                </Grid>

            </Grid>    
        </Container>

    )
}


export default translate(About);

/**
  <Container fixed>
        <Grid container spacing={1} className={classes.root}>
            <Grid item>
                
                <Grid item>
                    <Typography gutterBottom variant="h5" component="h4">
                    {t("contact.block1.header")}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {t('contact.block1.text')}
                    </Typography>
                </Grid>

                <Grid item >
                    <Typography gutterBottom variant="h5" component="h4">
                    {t("contact.block2.header")}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {t('contact.block2.text')}
                    </Typography>
                </Grid>    
                    
                <Grid item >
                    <Typography gutterBottom variant="h5" component="h2">
                    {t("contact.block3.header")}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {t('contact.block3.text')}
                    </Typography>
                </Grid>
            </Grid> 
            <Grid item>    

                <Grid item xs={12} >
                   
                </Grid>
            </Grid>         
        </Grid>
    </Container>    
 */
