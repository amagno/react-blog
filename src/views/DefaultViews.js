import React from 'react'
import {Jumbotron, Well, ListGroup, ListGroupItem, Button, HelpBlock} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const HomeView = () => (
    <Jumbotron>
        <h1>Site em construção....</h1>
        <p>Utilizaçãdo React.Js com Github Pages </p>
    </Jumbotron>
)
export const PostsView = () => (
    <div>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
    </div>
)
export const PalestraView = () => (
        <Well>
        <h1 style={{ textAlign: 'center' }}>Palestra Git & Github</h1>
        <h4>
            Está palestra tem como objetivo explicar como funciona o sistema Git e sua utilidade no dia a dia de um programador
        </h4>
            
        <ListGroup style={{ fontSize: '26px' }}>
            <ListGroupItem>Introdução</ListGroupItem>
            <ListGroupItem>Quem programa ou pretende programar</ListGroupItem>
            <ListGroupItem>De que forma guarda esses programas ?</ListGroupItem>
            <ListGroupItem>Um programa que tenha dois ou mais desenvolvedores</ListGroupItem>
            <ListGroupItem>Sistemas de Controle de Versão</ListGroupItem>
            <ListGroupItem>Alguns Sistemas de Controle de Versão existentes</ListGroupItem>
            <ListGroupItem>Pra que Serve um Sistema de Controle de Versão</ListGroupItem>
            <ListGroupItem>Como Funciona um Sistema de Controle de Versão</ListGroupItem>
            <ListGroupItem>O Git</ListGroupItem>
            <ListGroupItem>Quem inventou o Git</ListGroupItem>
            <ListGroupItem>Como usar o Git</ListGroupItem>
            <ListGroupItem>Upload em um repositório remoto</ListGroupItem>
            <ListGroupItem>Hosts de repositórios</ListGroupItem>
            <ListGroupItem>O Github</ListGroupItem>
            <ListGroupItem>Alguns dados sobre o Github</ListGroupItem>
            <ListGroupItem>O que existe dentro do Github</ListGroupItem>
            <ListGroupItem>Empresas que usam o Github</ListGroupItem>
            <ListGroupItem>Alguns projetos open-source que estão no Github</ListGroupItem>
            <ListGroupItem>A importâcia deste conteúdo para um programador</ListGroupItem>
            <ListGroupItem>Utilizando o Github</ListGroupItem>
            <ListGroupItem>Github Pages</ListGroupItem>
            <ListGroupItem>Criando uma pagina no Github Pages</ListGroupItem>
            <ListGroupItem>Guias e Tutoriais sobre Git & Github</ListGroupItem>
            <ListGroupItem>Conclusão</ListGroupItem>
        </ListGroup>
        <Button href="/presentation" bsStyle="success" bsSize="large" block>Iniciar apresentação</Button>
        </ Well>
)
export const AboutView = () => (
    <blockquote><h1>Alexandre Magno Monteiro</h1></blockquote>
)
