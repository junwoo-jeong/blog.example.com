import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

//import container...
import MenuContainer from'../container/MenuContainer';
import PostListContainer from '../container/PostListContainer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <MenuContainer />
                </header>
                <Section>
                    <PostListContainer />
                </Section>
            </Fragment>
        )
    }
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default Home;
