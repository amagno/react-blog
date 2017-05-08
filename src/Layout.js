import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import reactLogo from './logo.svg'
import Navbar from './components/Navbar'

const Header = () => (<Navbar/>)

const Content = ({children}) => (
    <div className='container content'>
        {children}
    </div>
)
const Footer = () => (
    <footer className='footer'>
        <div className='container'>
            <Grid>
                <Row className="footer-content">
                    <Col xs={4} md={4} className="col-footer" style={{ borderLeft: '1px solid white' }}>
                        <a href="#">
                            <span className='fa fa-github fa-2x'></span>
                            <spam className="hidden-xs hidden-sm">&nbsp;&nbsp;&nbsp;&nbsp;Github</spam>
                        </a>
                    </Col>
                    <Col xs={4} md={4} className="col-footer" style={{ borderLeft: '1px solid white', borderRight: '1px solid white'}}>
                        <a href="#">
                            <img src={reactLogo} className="App-logo" alt="logo"/>
                            <span className="hidden-xs hidden-sm">React.Js</span>
                        </a>
                    </Col>
                    <Col xs={4} md={4} className="col-footer" style={{ borderRight: '1px solid white'}}>
                        <a href="#">
                            <span className='fa fa-google-plus fa-2x'></span>
                            <span className="hidden-xs hidden-sm">&nbsp;&nbsp;&nbsp;&nbsp;Google+</span>
                        </a>
                    </Col>
                </Row>
            </Grid>
        </div>
    </footer>
)
const Layout = ({children}) => (
    <div>
        <Header/>
        <Content>
            {children}
        </Content>
        <Footer/>
    </div>
)

export default Layout