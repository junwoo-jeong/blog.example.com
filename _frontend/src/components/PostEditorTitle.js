import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

class PostEditorTitle extends Component {

    render() {
        return (
            <Fragment>
                <InputTitle
                    value={this.props.title}
                    onChange={this.props.handleOnChanged}
                    placeholder='제목'/>
            </Fragment>
        );
    }
}
const InputTitle = styled.input`
    width: 600px;
    height: 60px;
    font-weight: 600;
    font-size: 30px;
    margin-bottom : 20px;
`;
export default PostEditorTitle;
