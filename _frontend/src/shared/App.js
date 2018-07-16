import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import { Home, About, Write, Post } from 'pages';
import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Nanum Gothic', sans-serif;
        background-color: #f4f4f4;
    }
`;
class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/post" component={Home}/>
                <Route exact path="/write" component={Write}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/post/:title" component={Post}/>

            </div>
        );
    }
}

export default App;
