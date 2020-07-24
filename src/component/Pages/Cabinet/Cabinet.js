import React, {Component} from 'react';
import './Cabinet.css';
import {translate} from "react-switch-lang";
import {Container, Navbar, Tab, Nav, NavDropdown, Row, Col} from "react-bootstrap";

class Cabinet extends Component {
  render(){
    const {t} = this.props;
  
  return(
    <Container className={'cabinet'}>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{t("cabinet.brand")}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item></Nav.Item>
        </Nav>
        <Nav>
        <NavDropdown title={t("cabinet.ls")} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">000000001</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">000000002</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">000000003</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">{t("cabinet.addls")}</NavDropdown.Item>
      </NavDropdown>
        </Nav>
      </Navbar>
      <Tab.Container id="ledt-tabs-example" className="mt-5" defaultActiveKey="first">
        <Row className="p-3"> 
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">{t('cabinet.tab1.title')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">{t('cabinet.tab2.title')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">{t('cabinet.tab3.title')}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">

                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">

                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
        
      </Tab.Container>  

    </Container>  
  )
  }
}

export default (translate(Cabinet));