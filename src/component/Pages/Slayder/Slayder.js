import React, {Component} from "react"
import {Container} from "react-bootstrap";
import image1 from './Sekcja1.jpg'
import image2 from './Sekcja2.jpg'
import image3 from './Sekcja3.jpg'
import './Slayder.css'
import BackgroundSlider from '../../BackgroundSlider/BackgroundSlider'

//'react-background-slideshow'//'react-background-slider'

class Slayder extends Component {
    render (){
        //let intervalCsaHead = setInterval(csaHead,8000);
        return (
            <Container  fluid={true}  className={'row_brown'}>


                <Container  fluid={true}  className={'slayder'}>
                    <BackgroundSlider
                                      images={[image1, image2, image3]}
                                      duration={3}
                                      transition={2}
                    >

                    </BackgroundSlider>
            </Container>

            </Container>

        )
    }
}

 export default Slayder;
/**
 *
 *
 *                 <Container  fluid={true}  className={'slayder row_white'}>
 *            <div className="mt-5">Zgubiłeś szlak prowadzący do celu?</div>
 <div className="mt-5">Nie wiesz jak się poruszać po ścieżkach ustaw?</div>
 <div className="mt-5">Szukasz drogowskazu do bezpiecznych prawnie rozwiązań?</div>
 <div className="mt-5">Naszym powołaniem jest być twoim przewodnikiem.</div>
 *         /*function csaHead(){
            if( i > (imgHead.length-1)){
                ('.csa-head').animate({'opacity':'0'},200,function(){
                    i=1;
                    ('.csa-head').css({'background':'url('+imgHead[0]+')'});
                });
                ('.csa-head').animate({'opacity':'1'},200);
            }else{
                ('.csa-head').animate({'opacity':'0'},200,function(){
                    ('.csa-head').css({'background':'url('+imgHead[i]+')'});
                    i++;
                });
                ('.csa-head').animate({'opacity':'1'},200);
            }
        }*/
/*
 <Carousel className={"slayder"} id={"slayder"}>
 <Carousel.Item className={"sldblk"}>
 <img
 className="imgsld d-block w-100"
 src={image1}
 alt="First slide"
 />

 <Carousel.Caption>

 <h1 className={"text-dark"}>First slide label</h1>
 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
 <Button className={"primary"}/>
 </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
 <img
 className="d-block w-100"
 src={image2}
 alt="Third slide"
 />
 </Carousel.Item>
 <Carousel.Item>
 <img
 className="d-block w-100"
 src={image3}
 alt="Third slide"
 />
 </Carousel.Item>
 </Carousel>
 */
