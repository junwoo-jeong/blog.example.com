/* import react modules */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

/* import container modules */
import MenuContainer from '../container/MenuContainer';
import PostEditor from '../components/PostEditor';

class Write extends Component {
    render() {
        return(
            <Fragment>
                <header>
                    <MenuContainer />
                </header>
                <Section>
                    <PostEditor />
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

export default Write;
