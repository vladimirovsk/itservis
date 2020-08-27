import React,  {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Paper, Typography } from "@material-ui/core";

//import {Button, Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import {translate} from "react-switch-lang";
import restApi from '../Project/img/REST_API.png'; 
import cabinetTgo from '../Project/img/TGO_CABINET.png'; 
import avr from '../Project/img/AVR.jpeg'; 
import gkh from '../Project/img/GKH.jpg'; 

const useStyles = makeStyles((theme) => ({
    mt5:{ marginTop:theme.spacing(8)},
    paper:{
        padding:theme.spacing(2)
    }
}));

function Project (props)  {
    const classes = useStyles();
    const [{t}] = useState(props);
        return (
            <Container className={classes.mt5}>
                <Grid container className={classes.container} spacing={5}>

                    <Grid item md={12} >
                        <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item md={2}>
                                <img  width={150} height={110} alt={t('project.row1.title')} className="mr-3" src={restApi} />
                            </Grid>
                            <Grid item md={10}>
                                <Typography variant='h5'>{t('project.row1.title')}</Typography>
                                <Typography variant='body1' paragraph align='justify'>{t('project.row1.text')}</Typography>
                            </Grid>    
                        </Grid>    
                        </Paper>
                    </Grid>
                    <Grid item md={12} >
                        <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item md={2}>
                                <img  width={150} height={140} alt={t('project.row2.title')} className="mr-3" src={cabinetTgo} />
                            </Grid>
                            <Grid item md={10}>
                                <Typography variant='h5'>{t('project.row2.title')}</Typography>
                                <Typography variant='body1' paragraph align='justify'>{t('project.row2.text')}</Typography>
                            </Grid>    
                        </Grid>    
                        </Paper>
                    </Grid>
                    <Grid item md={12} >
                        <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item md={2}>
                                <img  width={150} height={130} alt={t('project.row3.title')} className="mr-3" src={avr} />
                            </Grid>
                            <Grid item md={10}>
                                <Typography variant='h5'>{t('project.row3.title')}</Typography>
                                <Typography variant='body1' paragraph align='justify'>{t('project.row3.text')}</Typography>
                            </Grid>    
                        </Grid>    
                        </Paper>
                    </Grid>
                    <Grid item md={12} >
                        <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item md={2}>
                                <img  width={150} height={150} alt={t('project.row4.title')} className="mr-3" src={gkh} />
                            </Grid>
                            <Grid item md={10}>
                                <Typography variant='h5'>{t('project.row4.title')}</Typography>
                                <Typography variant='body1' paragraph align='justify'>{t('project.row4.text')}</Typography>
                            </Grid>    
                        </Grid>    
                        </Paper>
                    </Grid>

                </Grid>        
            </Container>
        )
}

export default translate(Project)

/**
 <Row>
                    <Col md="9" className="text-left meProject">
                        <ListGroup>

                            <ListGroup.Item className="bg-white mt-3"><Media>
                                <img  width={150} height={110} alt={t('project.row1.title')} className="mr-3" src={restApi} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row1.title')}</h5>
                                    <p>{t('project.row1.text')}</p>
                                    <Button variant={"outline-primary"} >
                                        <a rel="external" href="https://teplo.od.ua/cabinet">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>

                            <ListGroup.Item className="bg-white mt-3"><Media className={" m-3 "}>
                                <img width={150} height={140} alt={t('project.row2.title')} className="mr-3" src={cabinetTgo} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row2.title')}</h5>
                                    <p>{t('project.row2.text')}
                                    </p>
                                    <Button variant={"outline-primary"} >
                                        <a rel="external" href="https://teplo.od.ua/cabinet">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>

                            <ListGroup.Item className="bg-white mt-3"><Media className={" m-3 "}>
                                <img width={150} height={130} alt={t('project.row3.title')} className="mr-3" src={avr} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row3.title')}</h5>
                                    <p>{t('project.row3.text')}
                                    </p>
                                    <Button variant={"outline-primary"}>
                                        <a rel="external" href="http://heatmeter.itservis.od.ua">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>
                            <ListGroup.Item className="bg-white mt-3"><Media className={" m-3 "}>
                                <img width={150} height={150} alt={t('project.row4.title')} className="mr-3" src={gkh} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row4.title')}</h5>
                                    <p>{t('project.row4.text')}
                                    </p>
                                    <Button variant={"outline-primary"}>
                                        <a rel="external" href="http://csip.itservis.od.ua/">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md="3">
                        <Card className="mt-3">
                            <Card.Title className="text-center mt-4">{t('project.category.title')}</Card.Title>
                        <ListGroup variant={"flush"}>
                            <ListGroup.Item>{t('project.category.list.row1.title')}</ListGroup.Item>
                            <ListGroup.Item>{t('project.category.list.row2.title')}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Card className={"mt-3"}>
                            <Card.Body>
                                <Card.Title>{t('project.vidjet.title')}</Card.Title>
                                <Card.Text>
                                    {t('project.vidjet.text')}

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        )
    }

*/