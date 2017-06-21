import React from 'react'
import {Jumbotron, Well, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const HomeView = () => (
    <Jumbotron>
        <h1>Site em construção....</h1>
        <p>Utilizando React, React-Router, Bootstrap v3, Bootswatch Themes, React-Bootstrap no Github Pages </p>
        <p>Obrigado a <a href="https://github.com/rafrex/spa-github-pages">github.com/rafrex/spa-github-pages</a> por criar método eficaz para implementar aplicativos com React no Github Pages</p>
    </Jumbotron>
)
export const PostsView = () => (
    <div>
        <h1>Connect to graphQL API</h1>
    </div>
)
export const PalestraView = () => (
    <Well>
        <h2>Apresentações e Palestras</h2>
        <hr />
    <ListGroup>
        <ListGroupItem><Link to="/palestra/gitgithub">Git & Github</Link></ListGroupItem>
        <ListGroupItem><Link to="/palestra/euclides">Algoritimo de Euclides</Link></ListGroupItem>
    </ListGroup>
    </Well>
)
export const AboutView = () => (
    <blockquote><h1>Alexandre Magno Monteiro</h1></blockquote>
)
