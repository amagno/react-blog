import React from 'react'
import {Link} from 'react-router-dom'
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    // Image
} from 'spectacle'
import Terminal from 'spectacle-terminal'
import { Image } from 'react-bootstrap'

import exampleImage1 from '../737px-Equipe_A.svg.png'
import exampleImage2 from '../632px-Equipe_B.svg.png'
import exampleImage3 from '../737px-Equipe_C.svg.png'
import exampleImage4 from '../601px-Equipe_D.svg.png'
import exampleImage5 from '../601px-Equipe_E.svg.png'
import exampleImage6 from '../542px-Equipe_F.svg.png'
import gitFlowImage from '../how-to-use-git-flow.jpg'
import branchesWorkflow from '../Gitflow-workflow.png'
import vcsImage from '../maxresdefault.jpg'
import equipImage from '../20131108-PIVOTAL-231edit1.jpg'
import bigClassDiragramImage from '../big-class-diagram-without-beans1.png'
import programmerImage from '../crazy-work-guy-o.gif'
import remoteRepositoryImage from '../02-setup-git-standard.png'
import githubImage from '../github.jpg'
//import gitBranches from '../git_branches.png'
import gitGithubLogo from '../gitgithub.jpg'
import gitLogo from '../Git-logo.svg.png'
import linusImage from '../linus_torvalds.jpg'
import remoteWorkflowImage from '../basic-remote-workflow.png'
import apollo11GithubImage from '../apollo11.png'
import freeCodeCampGithubImage from '../freeCodeCamp.png'
import linuxGithubImage from '../linux.png'
import lisenceGithubImage from '../lisenca.png'
import repositoriesImage from '../repositorios.png'
import languagesImage from '../linguagens.png'
// Import image preloader util import preloader from
// 'spectacle/lib/utils/preloader'; Import theme
import createTheme from 'spectacle/lib/themes/default';

import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    green: "#24CA24",
    orange: "#F29035",
    blackBlue:  "#0C1A22"
}, {
    primary: "Lato",
    secondary: "Arial"
});

const iconStyle = {
    margin: '15px',
    color: '#F05134'
}

const listStyle = {
    fontSize: '28px'
}
const Presentation = () => (
    <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        controls>
        <Slide transition={["zoom"]} bgColor="primary">
            <Image src={gitGithubLogo} responsive/>
        </Slide>
        <Slide bgColor="green" transition={["fade"]}>
        <Heading size={3}>Quem programa ou pretende programar ?
        </Heading>
        <Image src={programmerImage} responsive style={{ margin: '20px auto' }}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={3} textColor="primary" caps>Como você guarda o seus programas ?</Heading>
            <i className="fa fa-dropbox fa-5x" style={iconStyle}></i>
            <i className="fa fa-google fa-5x" style={iconStyle}></i>
            <i className="fa fa-usb fa-5x" style={iconStyle}></i>
            <i className="fa fa-hdd-o fa-5x" style={iconStyle}></i>
        </Slide>
        <Slide transition={["fade"]} bgImage={bigClassDiragramImage} >
            <div style={{ backgroundColor: 'white', padding: '10px'}}>
            <Heading size={2}>Programas maiores</Heading>
            </div>
        </Slide>
         <Slide transition={["fade"]} bgImage={equipImage} >
            <div style={{ backgroundColor: 'white', padding: '10px'}}>
            <Heading size={2}>Equipes maiores</Heading>
            </div>
        </Slide>
         <Slide  transition={["fade"]} bgImage={vcsImage} >
            <div style={{ backgroundColor: 'white', padding: '50px'}}>
            <Heading size={4}>Sistemas de controle de Versões</Heading>
            <Text textAlign="justify"> sistema de controle de versões (ou versionamento), VCS (do inglês version control system) ou ainda SCM (do inglês source code management)</Text>
            </div>
        </Slide>
        <Slide transition={["fade"]}>
            <List>
            <Heading size={1}>Principais vantagens</Heading>
                <ListItem>Controle do histórico</ListItem>
                <ListItem>Trabalho em equipe</ListItem>
                <ListItem>Marcação e resgate de versões estáveis</ListItem>
                <ListItem>Ramificação de projeto</ListItem>
            </List>
        </Slide>
        <Slide bgColor="tertiary" transition={["fade"]}>
            <List textColor="primary">
                <ListItem>Git</ListItem>
                <ListItem>BitKeeper  (2002 – Abril 2005)</ListItem>
                <ListItem>Subversion</ListItem>
                <ListItem>Mercurial</ListItem>
                <ListItem>Concurrent Versions System (CVS, CVSNT, OpenCVS, TortoiseCVS)</ListItem>
                <ListItem>Autodesk Vault</ListItem>
                <ListItem>IBM Rational Team Concert</ListItem>
                <ListItem>Visual Studio Team Services</ListItem>
            </List>
        </Slide>
        <Slide bgColor="orange" transition={["fade"]}>
            <Heading size={5} textColor="primary">Como functiona ? </Heading>
            <Image src={gitFlowImage} responsive></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage1} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage2} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
          <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage3} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage4} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage5} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={exampleImage6} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={branchesWorkflow} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Image src={gitLogo} responsive/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
             <BlockQuote>
                <Quote> <Image src={linusImage} responsive height="250px" width="150"></Image></Quote>
                <Cite>Linus Torvalds</Cite>
            </BlockQuote>
            <List >
                <ListItem style={listStyle}>Velocidade</ListItem>
                <ListItem style={listStyle}>Design simples</ListItem>
                <ListItem style={listStyle}>Suporte robusto a desenvolvimento não linear (milhares de branches paralelos)</ListItem>
                <ListItem style={listStyle}>Totalmente distribuído</ListItem>
                <ListItem style={listStyle}>Capaz de lidar eficientemente com grandes projetos como o kernel do
                    Linux (velocidade e volume de dados)</ListItem>
            </List>
        </Slide>
        <Slide bgColor="quartenary"  transition={["fade"]}>
            <Heading>Como usar ?</Heading>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={4}>Faça o download em: <br /><a href="https://git-scm.com/downloads">git-scm.com/downloads</a></Heading>
        </Slide>
        <Slide transition={["spin"]}>
        <Heading size={5}>Após instalado abra um terminal de comando (cmd.exe , bas, shz)</Heading>
          <Terminal title="1. elijahm@elijahm: ~(zsh)" output={[
              "cd <diretório-do-programa>",
              "git init",
              "Initialized empty Git repository in <diretório-do-programa>/.git/",
              "git add test.txt",
              'git commit -m "Meu primeiro commit" ',
              <div>
              [master (root-commit) 82b0dc4] Meu primeiro commit <br />
              1 file changed, 0 insertions(+), 0 deletions(-) <br />
              create mode 100644 test.txt
              </div>]}
            />
        </Slide>
        <Slide transition={["fade"]}>
        <Image src={remoteWorkflowImage} width={820} responsive></Image>
        </Slide>
        <Slide transition={["fade"]}>
            <Heading size={4}>Upload em repositórios remotos</Heading>
            <Image src={remoteRepositoryImage} width={700} responsive style={{margin: '50px auto'}}></Image>
        </Slide>
         <Slide transition={["fade"]}>
            <List>
            <Heading>Hosts de repositórios</Heading>
                <ListItem>Github <i className="fa fa-github"></i></ListItem>
                <ListItem>Bitbucket <i className="fa fa-bitbucket"></i></ListItem>
                <ListItem>Google Code <i className="fa fa-google"></i></ListItem>
                <ListItem>Sourceforge, Gitlab, SourceRepo, Unfunddle etc...</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]}>
            <Image src={githubImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>

        <Slide bgColor="quartenary" transition={["fade"]}>
            <Heading size={4} textColor="orange">O Github, é na verdade uma rede social ou uma fábrica social de software, que desenvolve e promove milhares de códigos fontes pré armazenados, para as mais diversas finalidades.</Heading>
            <Text>As of April 2017, GitHub reports having almost <b>20 million users and 57 million repositories</b>, making it the largest host of source code in the world.</Text>
        </Slide>
        <Slide bgColor="quartenary" transition={["fade"]}>
            <Heading>O que existe dentro do github ?</Heading>
        </Slide>
        <Slide transition={["fade"]}>
            <Image src={apollo11GithubImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/chrislgarry/Apollo-11">github.com/chrislgarry/Apollo-11</a>
        </Slide>
        <Slide transition={["fade"]}>
            <Image src={freeCodeCampGithubImage}  width={700} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/freeCodeCamp/freeCodeCamp">github.com/freeCodeCamp/freeCodeCamp</a>
        </Slide>
        <Slide transition={["fade"]}> 
            <Image src={linuxGithubImage}  width={800} responsive style={{margin: '0 auto 100px auto'}}></Image>
            <a href="https://github.com/torvalds/linux">github.com/torvalds/linux</a>
        </Slide>

        <Slide transition={["fade"]} bgColor="orange">
            <Heading size={4}>Open-source != Free-software = Open-source</Heading>
            <Heading size={5}>Veja a lisença</Heading>
        </Slide>
        <Slide transition={["fade"]}> 
            <Image src={lisenceGithubImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="blackBlue"> 
            <Heading size={6} textColor="primary">Empresas que usam o Github e repositórios populares.</Heading>
            <Image src={repositoriesImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>
        <Slide transition={["fade"]} bgColor="blackBlue"> 
            <Heading size={6} textColor="primary">Linguagens populares.</Heading>
            <Image src={languagesImage} responsive style={{margin: '0 auto 100px auto'}}></Image>
        </Slide>
        <Slide>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
                <Quote>Obrigado</Quote>
                <Cite>Alexandre Magno Monteiro</Cite>
            </BlockQuote>
            <div style={{ padding: '30px', textAlign: 'center' }}>
            <Link to="/palestra">Clique para voltar para o site</Link>
            </div>
        </Slide>
        
        
    </Deck>
)

export default Presentation