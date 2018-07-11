import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import { Home, About, Write } from 'pages';
import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Nanum Gothic', sans-serif;
        background-color: white;
    }
`;
class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/write" component={Write}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;
