/* import react modules */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

/* import container modules */
import MenuContainer from '../container/MenuContainer';
import WriteContainer from '../container/WriteContainer';

class Write extends Component {
    render() {
        return(
            <Fragment>
                <header>
                    <MenuContainer />
                </header>
                <Section>
                    <WriteContainer />
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
