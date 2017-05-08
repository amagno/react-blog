import React from 'react'
import Layout from './Layout'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import * as View from './views/DefaultViews'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const RouteAnimated = ({ trasintionName, ...rest }) => (
    <Route render={({ location }) => (
        <CSSTransitionGroup transitionName={trasintionName} transitionEnterTimeout={500} transitionLeave={false} >
            <Route location={location} key={location.key} {...rest} />
        </CSSTransitionGroup>
    )}/>
)

const Root = () => (
    <Router>
        <Layout>
        <RouteAnimated trasintionName="fade" exact path="/" component={View.HomeView} />
        <RouteAnimated trasintionName="fade" path="/posts" component={View.PostsView} />
        <RouteAnimated trasintionName="fade" path="/palestra" component={View.PalestraView} />
        <RouteAnimated trasintionName="fade" path="/about" component={View.AboutView} />
        </Layout>
    </Router>
)

export default Root