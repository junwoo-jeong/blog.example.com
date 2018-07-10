import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

//import container...
import MenuContainer from'../container/MenuContainer';

import PostEditor from '../components/PostEditor';

class Write extends Component {
    render() {
        return(
            <Fragment>
                <PostEditor />
            </Fragment>
        )
    }
}

export default Write;
