import React from 'react'
import { ListGroup, ListGroupItem, Well, Button, Image } from 'react-bootstrap'
import Euclides from '../components/Euclides'
import EuclidesImageJS from './euclides_image_js.png'
import EuclidesImageC from './euclides_image_c.png'
import EuclidesGif from './euclides_c_gif.gif'

export default () => (
    <Well>
        <h1 style={{ textAlign: 'center' }}>Apresentação Algorimito de Euclides</h1>
        <div style={{ textAlign: 'center', backgroundColor: '#375A7F', padding: '20px' }}>
        <h4>
            Esta apresentação tem como objetivo explicar como funciona o Algoritimo de Euclides e sua implementação em JavaScript e C.
        </h4>
        </div>
        <Well>
            <Euclides />
        </Well>
        <h2 style={{ textAlign: 'center' }}>Código em JavaScript ES6  <a href="https://github.com/amagno/react-blog/blob/master/src/components/Euclides.js">Código Fonte</a></h2>
        <Image src={EuclidesImageJS} style={{ margin: '10px 100px' }}/>
        <h2 style={{ textAlign: 'center' }}>Código em C <a href="https://github.com/amagno/react-blog/blob/master/src/main.c">Código Fonte</a></h2>
        <Image src={EuclidesImageC} style={{ margin: '10px 100px' }}/>
        <h3 style={{ textAlign: 'center' }}>Execução</h3>        
        <Image src={EuclidesGif} style={{ margin: '10px 240px' }}/>
        
        <blockquote>
            <h4><b>Grupo APS 2 Fundamentos em Matemática:</b></h4>
            <ul>
                <li>Alexandre Magno Monteiro</li>
                <li>Luis Manuel</li>
                <li>Gabriel Facimoto</li>
            </ul>
        </blockquote>
        <Button href="/palestra/gitgithub/presentation" bsStyle="success" bsSize="large" block>Iniciar apresentação</Button>
    </ Well>
)