import React, {useState} from "react";
import './About.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import renderHTML from 'react-render-html';
import viberIcon from '../../../assets/viber.png';
import skypeIcon from '../../../assets/skype.jpg';
import facebookIcon from '../../../assets/facebook.png';
import emailCircle from '../About/img/emailCircle.jpg';
import questCircle from '../About/img/questCircle.jpeg';
import {translate} from "react-switch-lang";
import { Container, Paper } from "@material-ui/core";
import mePhoto from "../../Pages/About/me3.jpg";

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
        padding:theme.spacing(1),
        //"&:hover":{
        //    boxShadow: '0px 14px 14px rgba(34, 35, 58, 0.4)',
        //  }
        //textAlign: 'center',
        //color: theme.palette.text.secondary,
      },

      container: {
          marginTop: theme.spacing(6),
          height: "100%"
      },
      item:{
          marginTop:theme.spacing(1),
          flex:1    
      },

      avatar: {
        backgroundColor: theme.palette.common.colorSecondary,
        width: theme.spacing(7),
        height: theme.spacing(7),
        boxShadow: theme.shadows[10],
      },
      icon: {
        width: '3em',
        heigh: '3em'
      },
      cardMedia:{
        paddingTop: "56.25%",
        //borderRadius: theme.spacing(2), // 16px   
        //boxShadow: '0px 4px 4px rgba(34, 35, 58, 0.2)',
          //position: 'relative'
      },
      
      CardContent:{
            //margin:'auto',
            margin: theme.spacing(5),
            maxWidth: 500,
            //paddingBottom: theme.spacing(2),
            flexGrow:1, 
            //heigh:500
      },

      cardGrid:{
            // 16px
            transition: '0.3s',
            //boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            //position: 'relative',
            //maxWidth: 500,
            //marginLeft: 'auto',
            overflow: 'initial',
            background: theme.palette.primary, //'#ffffff',
            //display: 'flex',
            //flexDirection: 'column',
            //alignItems: 'left',
            //paddingBottom: 100,
            //marginTop: theme.spacing(4)
      },

      cardItem:{
        borderRadius: theme.spacing(2),  
        width: '100%',
        height: '100%',
        //paddingBottom: theme.spacing(2),
        //marginBottom:theme.spacing(4),
        "&:hover":{
            //color: "red"
            boxShadow: '0px 14px 14px rgba(34, 35, 58, 0.4)',
          }
      },

    }));

function About (props ) {
    const [{t}] = useState(props);
    const classes = useStyles();
    const strEmail = renderHTML("<a className='mail'  href=mailto:"+t('kontact.email')+">"+t('kontact.email')+"</a>");
    return (
        //xs={12} xm={6} md={4}
        <Container>
            <Grid container className={classes.container} spacing={5}>
                <Grid item xs={12} md={8} >
                    <Paper className={classes.paper} >
                    <Avatar alt="Sergey Vladimirov" src={mePhoto} className={classes.avatar}/>
                       
                        <Typography gutterBottom variant="h5" component="h4" align="center" >
                               {t("contact.block4.header")}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em', padding:'2em'}}>
                               {t('contact.block4.text1')}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em', padding:'2em'}}>
                               {t('contact.block4.text2')}
                        </Typography>
                        <hr />
                        <div align="center">
                        <Grid container justify="center" >
                            <Grid item >    
                                <Typography variant="h5" component="h1" align="center" style={{marginBottom:'1em'}}>
                                    {t('kontact.title')}
                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid container spacing={5} justify="center" >

                            <Grid item>   
                                <Tooltip title="vladimirov_sk" arrow enterDelay={500} leaveDelay={200} placement="top">
                                <a href="skype:vladimirov_sk?chat">
                                    <img src={skypeIcon} className={classes.icon} alt={t('kontact.skype')}/>
                                </a>
                                </Tooltip> 
                            </Grid>

                            <Grid item>
                                <Tooltip title="sergey@it-vladimirov.com" arrow enterDelay={500} leaveDelay={200} placement="top">
                                <a className="mail" href="mailto:sergey@it-vladimirov.com">
                                    <img src={emailCircle} alt="sergey@it-vladimirov.com" className={classes.icon}/>
                                </a>
                                </Tooltip>
                            </Grid>

                            <Grid item>
                                <Tooltip title="facebook.com/itvladimirov" arrow enterDelay={500} leaveDelay={200} placement="top">
                                <a href="https://www.facebook.com/itvladimirov" rel="noopener noreferrer" target="_blank" >
                                <img className={classes.icon} src={facebookIcon} alt="facebook"/>
                                </a>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                              <Tooltip title="380975996560" arrow enterDelay={500} leaveDelay={200} placement="top">
                                <a href="viber://add?number=380975996560">
                                    <img src={viberIcon} alt="380975996560" className={classes.icon}/>
                                </a>
                              </Tooltip>  
                            </Grid>    

                        </Grid>
                        </div>
                        </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid 
                        direction="column"
                        container
                        className={classes.box}
                    >
                    <Grid className={classes.item} item>
                        <Card className={classes.cardItem}>
                            <CardHeader    
                                avatar={
                                    <Avatar aria-label="recipe"  className={classes.avatar} src={emailCircle}/>      
                                    }
                                    title= {t("contact.block1.header")}   
                                    subheader = {strEmail}                           
                            />
                            <CardContent>            
                                <Typography variant="body1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em'}}>
                                {t('contact.block1.text')}
                                </Typography>
                            </CardContent>
                            </Card>
                    </Grid>

                    <Grid className={classes.item} item>
                    
                    <Card className={classes.cardItem}>
                            <CardHeader    
                                avatar={
                                    <Avatar aria-label="recipe"  className={classes.avatar} src={questCircle}/>      
                                    }
                                    title= {t("contact.block2.header")}   
                                    subheader = " "                           
                            />
                            <CardContent>            
                                <Typography variant="body1" color="textSecondary" component="p" align='justify' style={{textIndent: '2em'}}>
                                {t('contact.block2.text')}
                                </Typography>
                            </CardContent>
                            </Card>
                    </Grid>
                    {//Kontainer
                    }
                    <Grid hidden={true} className={classes.item} item>
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
