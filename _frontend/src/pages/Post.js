import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

/* import container modules */
import MenuContainer from '../container/MenuContainer';
import PostViewContainer from '../container/PostViewContainer';

class Post extends Component {

    render() {
        //match에 params 사용
        const { match } = this.props;
        return(
            <Fragment>
                <header>
                    <MenuContainer />
                </header>
                <Section>
                    <PostViewContainer match={match} />
                </Section>
            </Fragment>
        );
    }
}
const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default Post;
