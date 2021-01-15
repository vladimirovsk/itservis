import React,  {useState} from "react";
import {connect} from "react-redux";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, IconButton, Card, CardActions, CardHeader, Grid, Container, Typography, CardContent, Button } from "@material-ui/core";
import {List, ListItem} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import {Button, Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import {translate} from "react-switch-lang";

import restApi from '../Project/img/REST_API.png'; 
import imgNit from '../Project/img/nit.png'; 
import avr from '../Project/img/AVR.jpeg'; 
import gkh from '../Project/img/GKH.jpg'; 
import imgNodeJs from '../Home/img/nodejs.png'
import imgArduino from '../Home/img/arduino2.png'
import imgDelphi from '../Home/img/delphi.png'
import imgUP1 from '../Project/img/UP1.jpg'

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
    //const [openDlg, setOpenDlg] = useState(props);
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

    const handleClick = () => {

    }

    //console.log({isAuth})
    //const handleExpandClick2 = (event) => {
        //console.log(event.currentTarget.id);
        //setExpanded2(!expanded2);
      //};
        return (
            <Container className={classes.mt5}>
                <Grid container className={classes.container} spacing={5} alignItems='center' justify='center' >
{/*----One Cards --------------------------------*/}
                    <Grid item md={12} >
                        <Card className={classes.projectCard}> 
                            <CardHeader 
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}
                                    src={imgNodeJs}/>
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
                                <Button variant="outlined" size="small" color="secondary" hidden={true} onClick={handleClick()}>
                                {t('project.row1.documents')}
                                </Button>
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
                                    <Typography paragraph>{t('project.row1.colapseTitle')}</Typography>
                                    <Typography paragraph>
                                        <React.Fragment>
                                            {t('project.row1.colapseText.row1')}
                                        </React.Fragment>
                                    </Typography>
                                    <Typography paragraph>
                                        {t('project.row1.colapseText.row2')}
                                    </Typography>
                                    <Typography paragraph>
                                        {t('project.row1.colapseText.row3')}
                                    </Typography>

                                    <List>
                                        <ListItem>
                                            {t('project.row1.colapseText.item1')}
                                        </ListItem>
                                        <ListItem>
                                            {t('project.row1.colapseText.item2')}
                                        </ListItem>
                                        <ListItem>
                                            {t('project.row1.colapseText.item3')}
                                        </ListItem>
                                    </List>    
                                    <Typography paragraph>
                                        {t('project.row1.colapseText.row4')}
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
                                  src={imgDelphi}
                                  />
                                }
                                title = {t('project.row2.title')}
                                subheader = 'Delphi'
                                /*action={<IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                }*/
                            />

                        <CardContent>
                            <Grid container>
                                <Grid item md={2} >
                                    <img  width={160} height={120} alt={t('project.row2.title')} className="mr-3" src={imgNit} style={{padding:10}}/>
                                </Grid>
                                <Grid item md={10}>
                                    <Typography variant='body1' paragraph align='justify'>{t('project.row2.text')}</Typography>
                                </Grid>    
                            </Grid>  
                        </CardContent>  
                        <CardActions disableSpacing>
                                <IconButton
                                    hidden={true}
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
                                    src={imgArduino} />
                                }
                                title = {t('project.row3.title')}
                                subheader = 'Atmel C++, PHP, HTML'
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
                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant='h5' align='center'>{t('project.row3.colapseTitle')}</Typography>
                                    <Grid container style={{padding:20}}>
                                    <Grid item>
                                            <Grid container >
                                                <Grid item md={4}>                                
                                                    <img style={{marginBottom:15, padding:20}} width={'80%'} src={imgUP1} alt='UP1'/>
                                                </Grid>  
                                                <Grid item md={8}>
                                                    <Typography paragraph align='justify'>
                                                        {t('project.row3.colapseText.row1')}
                                                    </Typography>
                                                    <Typography paragraph align='justify'>
                                                        {t('project.row3.colapseText.row2')}
                                                    </Typography> 
                                                    <Typography paragraph align='justify'>
                                                        {t('project.row3.colapseText.row3')}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                    </Grid>
                                    </Grid>
                                    </CardContent>
                                    
                            </Collapse>

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
                                    hidden={true}
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

function mapStateToProps(state){
    //console.log(new Date(localStorage.getItem('expirationDate')))
    //console.log(new Date(state.auth.expData)
    return{
     // isAuth: !!state.auth.token,
     // stDate: new Date(state.auth.expData),
      //openDlg state. openDlg
    }
  }

export default connect(mapStateToProps) (translate(Project));
