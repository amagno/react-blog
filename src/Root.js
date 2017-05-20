import React from 'react'
import Layout from './Layout'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import * as View from './views/DefaultViews'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Presentation from './views/presentation/Presentation'

const RouteAnimated = ({ trasintionName, ...rest }) => (
    <Route render={({ location }) => (
        <CSSTransitionGroup transitionName={trasintionName} transitionEnterTimeout={500} transitionLeave={false} >
            <Route location={location} key={location.key} {...rest} />
        </CSSTransitionGroup>
    )}/>
)
const PresentationContainer = () => (
    <div className="presentation-container">
        <Presentation />
    </div>
)
const Root = ({ ...props }) => (
    <Router>
    <div>
        <Layout>
        {console.log(props)}
        <RouteAnimated trasintionName="fade" exact path="/" component={View.HomeView} />
        <RouteAnimated trasintionName="fade" path="/posts" component={View.PostsView} />
        <RouteAnimated trasintionName="fade" path="/about" component={View.AboutView} />
        <RouteAnimated trasintionName="fade" path="/palestra" component={View.PalestraView} />
        </Layout>
        <Route path="/palestra/presentation" component={PresentationContainer} />
    </div>
    </Router>
);

export default Root