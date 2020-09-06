import React,  {useState} from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, IconButton, Card, CardActions, CardHeader, Grid, Container, Typography, CardContent } from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import {Button, Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import {translate} from "react-switch-lang";
import restApi from '../Project/img/REST_API.png'; 
import cabinetTgo from '../Project/img/TGO_CABINET.png'; 
import avr from '../Project/img/AVR.jpeg'; 
import gkh from '../Project/img/GKH.jpg'; 
import imgNodeJs from '../Home/img/nodejs.png'
import imgAngular from '../Home/img/angular.png'
import imgArduino from '../Home/img/arduino2.png'
import imgDelphi from '../Home/img/delphi.png'
const useStyles = makeStyles((theme) => ({
    mt5:{ marginTop:theme.spacing(8)},
    projectCard:{
        outline: 'none',
        //position:'absolute',
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '1em'
    },
    avatar: {
        backgroundColor: theme.palette.common.colorSecondary,
        boxShadow: theme.shadows[10],
      },
      expand: {
        outline: 'none',

        WebkitTapHighlightColor: 'transparent',
        //WebkitTapHighlightColor: 'transparent',
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        WebkitTapHighlightColor: 'transparent',
        outline: 'none',
        transform: 'rotate(180deg)',
      },
}));

function Project (props)  {
    const classes = useStyles();
    const [{t}] = useState(props);
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);

    const handleExpandClick = (event) => {
        switch (event.currentTarget.id) {
            case '1': 
               setExpanded1(!expanded1);
              break;
            case '2': 
                setExpanded2(!expanded2);
               break;  
            case '3': 
               setExpanded3(!expanded3);
              break;           
            case '4': 
              setExpanded4(!expanded4);
             break;           
              default: 
                console.log('Not find id element: '+event.currentTarget.id);   
      }
    }
    
    //const handleExpandClick2 = (event) => {
        //console.log(event.currentTarget.id);
        //setExpanded2(!expanded2);
      //};
        return (
            <Container className={classes.mt5}>
                <Grid container className={classes.container} spacing={5} alignItems='center' justify='center' >
                    <Grid item md={12} >
{/*----One Cards --------------------------------*/}
                        <Card className={classes.projectCard}> 
                            <CardHeader 
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={imgNodeJs}
                                >
                                
                                </Avatar>
                                }
                                title = {t('project.row1.title')}
                                subheader = 'Node JS'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />
                            <CardContent>
                                <Grid container direction='row'>
                                    <Grid item md={2}>
                                        <img  width={150} height={110} alt={t('project.row1.title')} className="mr-3" src={restApi} />
                                    </Grid>
                                    <Grid item md={10}>
                                        <Typography variant='body1' paragraph align='justify'>{t('project.row1.text')}</Typography>
                                    </Grid>    
                                </Grid>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    id='1'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded1,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded1}
                                    aria-label="show more"
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Общее описание:</Typography>
                                    <Typography paragraph>
                                        Сервис обмена создан для удобства одновременного проведения большого количества платежей, а также, для удобства реализации клиентского программного обеспечения за счет переноса части клиентской логики на сервер.
                                    </Typography>
                                    <Typography paragraph>
                                        Все команды передаются по https протоколу. 
                                            Используемые типы запросов:
                                            ●	POST
                                            ●	GET
                                            ●	DELETE  
                                            Данные запросов передаются в кодировке UTF-8.

                                    </Typography>
                                    </CardContent>
                            </Collapse>
                        </Card>    
                    </Grid>
{/*----Two Cards --------------------------------*/}
                    <Grid item md={12} >
                        <Card className={classes.projectCard}> 
                        <CardHeader 
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                  src={imgAngular}
                                  >
                                </Avatar>
                                }
                                title = {t('project.row2.title')}
                                subheader = 'Angular JS'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />

                        <CardContent>
                            <Grid container>
                                <Grid item md={2}>
                                    <img  width={150} height={140} alt={t('project.row2.title')} className="mr-3" src={cabinetTgo} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' paragraph align='justify'>{t('project.row2.text')}</Typography>
                                </Grid>    
                            </Grid>  
                        </CardContent>  
                        <CardActions disableSpacing>
                                <IconButton
                                    id='2'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded2,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded2}
                                    aria-label="show more"
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
{/*----Three Cards --------------------------------*/}
                    <Grid item md={12} >                
                        <Card className={classes.projectCard}> 
                        <CardHeader 
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={imgArduino}
                                >
                                </Avatar>
                                }
                                title = {t('project.row3.title')}
                                subheader = 'Atmel C++'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />
                        <CardContent>
                            <Grid container>
                                <Grid item md={2}>
                                    <img  width={150} height={130} alt={t('project.row3.title')} className="mr-3" src={avr} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' paragraph align='justify'>{t('project.row3.text')}</Typography>
                                </Grid>    
                            </Grid>    
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    id='3'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded3,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded3}
                                    aria-label="show more"
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                        </Card>

                    </Grid>
{/*----Fourth Cards --------------------------------*/}
                    <Grid item md={12} >
                        <Card className={classes.projectCard}> 
                        <CardHeader 
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={imgDelphi}
                                >
                                
                                </Avatar>
                                }
                                title = {t('project.row4.title')}
                                subheader = 'Delphi'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />
                        <CardContent>
                            <Grid container>
                                <Grid item md={2}>
                                    <img  width={150} height={150} alt={t('project.row4.title')} className="mr-3" src={gkh} />
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' paragraph align='justify'>{t('project.row4.text')}</Typography>
                                </Grid>    
                            </Grid> 
                        </CardContent>   
                        <CardActions disableSpacing>
                                <IconButton
                                    id='4'
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded4,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded4}
                                    aria-label="show more"
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
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