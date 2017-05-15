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
        <div style={{ textAlign: 'center', backgroundColor: '#375A7F', padding: '20px' }}>
        <h4>
            Está palestra tem como objetivo explicar como funciona o Sistemas de controle de versão abordando
            Git e Github e sua utilidade no dia a dia de um programador.
        </h4>
        </div>
            
        <ListGroup style={{ fontSize: '26px', textAlign: 'center' }}>
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
            <ListGroupItem>A importâcia deste conteúdo para um programador</ListGroupItem>
            <ListGroupItem>Utilizando o Github</ListGroupItem>
            <ListGroupItem>Github Pages</ListGroupItem>
            <ListGroupItem>Criando uma pagina no Github Pages</ListGroupItem>
            <ListGroupItem>Guias e Tutoriais sobre Git & Github</ListGroupItem>
            <ListGroupItem>Conclusão</ListGroupItem>
        </ListGroup>
        <blockquote>
            <h4><b>Referências:</b></h4>
            <p>(“Stack Overflow Developer Survey 2015”, [s.d.])(CAETANO, 2004)(MOLINARI, 2007)(MIKKELSEN, 1997)(“GitHub Octoverse 2016”, [s.d.])(“GitHub – Wikipédia, a enciclopédia livre”, [s.d.])(TORVALDS, 2005) (“Mercurial – Wikipédia, a enciclopédia livre”, [s.d.]) (“CVS – Wikipédia, a enciclopédia livre”, [s.d.])(WOHLER, 1992) (SVN, [s.d.])(Git User’s Manual, 2007)(Projects that use Git for their source code management, [s.d.])(MCVOY, 2003)(“Git - Book”, [s.d.])(“GitHub Pages | Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.”, [s.d.])</p>
            <ul>
                <li>CAETANO, C. CVS. [s.l.] ed. Novatec, 2004.</li>
                <li>CVS – Wikipédia, a enciclopédia livre. Disponível em: <a href="https://pt.wikipedia.org/wiki/CVS">https://pt.wikipedia.org/wiki/CVS</a> Acesso em: 11 maio. 2017. </li>
                <li>Git - Book. Disponível em: <a href="https://git-scm.com/book/en/v2">https://git-scm.com/book/en/v2</a> Acesso em: 13 maio. 2017. </li>
                <li>Git User’s Manual. [s.l: s.n.].</li>
                <li>GitHub – Wikipédia, a enciclopédia livre. Disponível em: <a href="https://pt.wikipedia.org/wiki/GitHub">https://pt.wikipedia.org/wiki/GitHub</a> Acesso em: 11 maio. 2017. </li>
                <li>GitHub Octoverse 2016. Disponível em: <a href="https://octoverse.github.com">https://octoverse.github.com</a> Acesso em: 11 maio. 2017.  </li>
                <li>GitHub Pages | Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live. Disponível em: <a href="https://pages.github.com/">https://pages.github.com/</a> Acesso em: 13 maio. 2017. </li>
                <li>MCVOY, L. BitKeeper: Why SCCS, rather than RCS? [s.l: s.n.].</li>
                <li>Mercurial – Wikipédia, a enciclopédia livre. Disponível em: <a href="https://pt.wikipedia.org/wiki/Mercurial ">https://pt.wikipedia.org/wiki/Mercurial</a> Acesso em: 11 maio. 2017. </li>
                <li>MIKKELSEN, T. P. S. Parctical Software Configuration Management. Upper Saddle River, NJ, EUA: Prentice Hall PTR, 1997.</li>
                <li>MOLINARI, L. Gerência de Configuração - Técnicas e Práticas no Desenvolvimento do Software. Florianópolis: Visual Books, 2007.</li>
                <li>Projects that use Git for their source code management. [s.l: s.n.].</li>
                <li>Stack Overflow Developer Survey 2015. Stack Overflow, [s.d.].</li>
                <li>SVN. [s.l.] Collab Net, [s.d.].</li>
                <li>TORVALDS, L. Linux 2.6.12. [s.l: s.n.].</li>
                <li>WOHLER, B. Unix — Frequently Asked Questions (7/7). [s.l: s.n.].</li> 
            </ul>
        </blockquote>
        <Button href="/presentation" bsStyle="success" bsSize="large" block>Iniciar apresentação</Button>
        </ Well>
)
export const AboutView = () => (
    <blockquote><h1>Alexandre Magno Monteiro</h1></blockquote>
)
