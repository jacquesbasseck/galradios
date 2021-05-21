import React, { Component } from 'react'
import Home from './components/Home';
import Layout from './components/Layout';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';


class App extends Component {

    render() {

        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Layout>
            </Router>

        )
    }
}
export default App
