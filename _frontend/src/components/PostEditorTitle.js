import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

class PostEditorTitle extends Component {

    render() {
        const {title, titleImg, onTitleChanged, onTitleImgChanged } = this.props;
        return (
            <Fragment>
                <InputTitle
                    value={title}
                    onChange={onTitleChanged}
                    placeholder='제목'/>
                <InputTitleImg
                    value={titleImg}
                    onChange={onTitleImgChanged}
                    placeholder='TitleImage URI'/>
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
const InputTitleImg = styled.input`
    width: 600px;
    height: 30px;
    font-weight: 400;
    font-size: 20px;
    margin-bottom : 20px;
`;
export default PostEditorTitle;
