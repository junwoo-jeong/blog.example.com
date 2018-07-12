import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import PostEditorTextarea from '../components/PostEditorTextarea';
import PostEditorTitle from '../components/PostEditorTitle';
import { Create } from '@material-ui/icons';

class WriteContainer extends Component {
    state = {
        title: '',
        contents: ''
    }

    focus = () => {
        this.editor.focus();
    };
    _handleOnContentsChanged = (contents) => {
        this.setState({
            contents: contents
        });
    }
    _handleOnTitleChanged = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    _handleOnPostUpload = () => {

    }
    render(){
        return(
            <Constainer>
                <PostEditorTitle
                    title={this.state.title}
                    handleOnChanged={this._handleOnTitleChanged} />
                <PostEditorTextarea
                    onContentsChanged={this._handleOnContentsChanged}/>
                <PostUploadButton>
                    <Create /><span>글 쓰기</span>
                </PostUploadButton>
            </Constainer>
        )
    }
}

const Constainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    margin-top: 20px;
`;
const PostUploadButton = styled.button`
    width: 300px;
    cousor: pointer;
    background-color: #fff;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
`;
export default WriteContainer;
