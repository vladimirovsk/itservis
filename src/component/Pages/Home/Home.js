import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';

//import {faHome} from '@fortawesome/free-solid-svg-icons'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {CardDeck, Container} from "react-bootstrap";

//import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//import LayerIcon from '@material-ui/icons/Layers'; 
//import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
//import RestoreIcon from '@material-ui/icons/Restore';
//import FavotiteIcon from '@material-ui/icons/Favorite';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
//import FolderIcon from '@material-ui/icons/Folder';

import {Card, CardContent, CardMedia} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import {translate} from 'react-switch-lang';


import imgDatabase from '../Home/img/database.jpg';
import imgServer from '../Home/img/servers.jpg';
import imgRest from '../Home/img/REST.jpeg';
import laptopItservis1 from '../Home/img/laptopItservis.jpg';
//import laptopItservis2 from '../Home/img/laptopItservis2.jpg';
//import BackgroundSlider from '../../BackgroundSlider/BackgroundSlider'

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary,
        flexGrow: 1,
      },
      mainFuturePost:{
        position: "relative",
        //position: 'static',
        //top: '0px',
        //zIndex: '-1000',
        //marginTop: theme.spacing(6),
        color: theme.palette.common.white,
        marginBottom: theme.spacing(6),
        backgroundImage: `url(${laptopItservis1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      overlay:{
        position:"absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0, 
        backgroundOverlay: "rgba(0,0,0,.9)"
     },
     mainFuturePostContetnt:{
         MarginLeftleft:'-500px',
        position:"relative",
        padding:theme.spacing(6),
        textShadow: '1px 1px 2px black, 0 0 1em black',
        marginTop: theme.spacing(4),
       // opacity:0
        //transition: 'all 0.8s easy 0s',
        //marginLeft: theme.spacing(-20)
      },
      mainContent:{

      },

      mainButtons:{
          backgroundColor:theme.palette.secondary

      },

      cardMedia:{
        paddingTop: "56.25%",
        //borderRadius: theme.spacing(2), // 16px   
        //boxShadow: '0px 4px 4px rgba(34, 35, 58, 0.2)',
          //position: 'relative'
      },
      
      CardContent:{
            margin:'auto',
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
            background: '#ffffff',
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

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/
  
let cards = [];

function Home (props) {
    const classes = useStyles();
    const [{t}] = useState(props)
    cards[0] = {
        id:"1",
        title:t("home.card1.header"),
        text:t("home.card1.text"),
        img: imgDatabase
    }
    cards[1] = {
        id:"2",
        title:t("home.card2.header"),
        text:t("home.card2.text"),
        img: imgServer
    }
    cards[2] = {
        id:"3",
        title:t("home.card3.header"),
        text:t("home.card3.text"),
        img: imgRest
    }
        return (
            <React.Fragment>
                <Paper className={classes.mainFuturePost}>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6} >
                            <div className={classes.mainFuturePostContetnt}>
                           
                            <Typography variant="h3" component="h1" color="inherit" >
                                {t('home.deviz.text1')}
                             </Typography>
                             <Typography variant="h6" component="h2" color="inherit" paragraph>
                                {t('home.deviz.text2')}
                             </Typography>
                             </div>
                        </Grid>
                    </Grid>    
                </Container>
                </Paper>
                <div className={classes.mainContent} bgcolor='grey'>
                    <Container maxWidth='md'>
                        <Typography variant='h3' color='textPrimary'  gutterBottom align="center">{t('home.modul1.text1')}</Typography>
                        <Typography variant='h5' color='textSecondary' gutterBottom align="center" paragraph>{t('home.modul1.text2')}</Typography>
                    </Container>
                </div>
                
                <Container className={classes.cardGrid}>
                <Grid container spacing={5} justify='center'>
                            {cards.map ((card)=> (
                                <Grid item key={card.id} xs={12} xm={6} md={4} >
                                    <Card className={classes.cardItem}>
                                    <CardMedia 
                                            className={classes.cardMedia}
                                            image={card.img}
                                            title="image card"
                                    />
                                        <CardContent  className={classes.cardContext}>
                                            <Typography variant="h5" gutterBottom align='center'>
                                                {card.title}
                                            </Typography>
                                            <Typography paragraph>
                                                {card.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>    
                                </Grid>
                            ))}
                    </Grid>

                </Container>
            </React.Fragment>
        )
}

export default translate(Home);

/**
 *                                         <CardActions>
                                        <Button size="small" color="secondary">View</Button>
                                        <Button size="small" color="secondary">Edit</Button>
                                        <LayerIcon />
                                        <PlayCircleFilledIcon />
                                        </CardActions>
 */