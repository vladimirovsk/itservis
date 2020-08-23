import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
//import {faHome} from '@fortawesome/free-solid-svg-icons'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {CardDeck, Container} from "react-bootstrap";

import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'



import {
    translate,
} from 'react-switch-lang';


import imgDatabase from '../Home/img/database.jpg';
import imgServer from '../Home/img/servers.jpg';
import imgRest from '../Home/img/REST.jpeg';
import laptopItservis from '../Home/img/laptopItservis.jpg';
//import laptopItservis from '../Home/img/laptopItservis2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
      },

      mainFuturePost:{
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(3),
        
        backgroundImage: `url(${laptopItservis})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
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
        position:"relative",
        padding:theme.spacing(6),
        textShadow: '1px 1px 2px black, 0 0 1em black',
        marginTop: theme.spacing(2)
      },
      mainContent:{

      }
    }));

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/
    
function Home (props) {
    const classes = useStyles();
    const [{t}] = useState(props)
    
        return (
            <React.Fragment>
                <Paper className={classes.mainFuturePost} 
                //style={{backgroundImage:`url(https://source.unsplash.com/random)`}}
                //style={{ backgroundImage:laptopItservis}}
                >
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFuturePostContetnt}>
                            <Typography gutterBottom variant="h2" component="h2" color="inherit" >
                                Мы решаем задачи которые ставят нам заказчики
                             </Typography>
                             <Typography gutterBottom variant="h5" component="h5" color="inherit" paragraph>
                             
                                Труля ля тру ляля мы не пилим тополя nруля ля тру ляля мы не пилим тополя tруля ля тру ляля мы не пилим тополя
                              </Typography>
                              <Button variant="contained" color="secondary">
                                  Learn More
                              </Button>
                             </div>
                        </Grid>
                        
                    </Grid>    
                    
                </Container>
                </Paper>  
                <div className={classes.mainContent}>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrymary' gutterBottom>Developer</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' gutterBottom paragraph>Труля ля тру ляля мы не пилим тополя nруля ля тру ляля мы не пилим тополя tруля ля тру ляля мы не пилим тополя</Typography>
                        <div className={classes.mainButtons}>
                            <Grid>

                            </Grid>
                        </div>

                    </Container>
                </div>
            </React.Fragment>
        )
}

/*Home.propTypes = {
    t: PropTypes.func.isRequired,
};*/


export default translate(Home);

/*

<Grid item xs={4}>
                    <Card className={cx(classes.root, shadowStyles.root)}>
                        <CardMedia 
                            className={classes.media}
                            //component="img"
                            //alt="database"
                            image={imgDatabase}
                            //title="database"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {t("home.card1.header")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {t('home.card1.text')}
                            </Typography>
                        </CardContent>    
                    </Card>
                </Grid>    
                <Grid item xs={4}>
                    <Card className={cx(classes.root, shadowStyles.root)}>
                        <CardMedia 
                            className={classes.media}
                            image={imgServer}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {t("home.card2.header")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {t('home.card2.text')}
                            </Typography>
                        </CardContent>    
                    </Card>
                </Grid>  
                <Grid item xs={4}>
                    <Card className={cx(classes.root, shadowStyles.root)}>
                        <CardMedia 
                            className={classes.media}
                            image={imgRest}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {t("home.card3.header")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {t('home.card3.text')}
                            </Typography>
                        </CardContent>    
                    </Card>
                </Grid>

                    <Card  bg={"info"} className=" m-4 bg-light">
                        <Card.Img varian={"top"} src={"database.jpg"}/>

                        <Card.Header>{t("home.card1.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t('home.card1.text')}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                    
                    <Card bg={"info"} className=" m-4 bg-light">
                        <Card.Img varian={"bottom"} src={"servers.jpg"}/>
                        <Card.Header>{t("home.card2.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t("home.card2.text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card className=" m-4 bg-light">
                        <Card.Img varian={"top"} src={"REST.jpeg"}/>
                        <Card.Header>{t("home.card3.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t("home.card3.text")}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
*/