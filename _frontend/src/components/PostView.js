import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

class PostView extends Component {

    render() {
        const { post } = this.props;
        console.log(post);
        return (
            <PostViewContainer>
                <PostImage src={post.img} />
                <PostTitle>
                    {post.title}
                </PostTitle>
                <PostDate>
                    {post.date}
                </PostDate>
                <Devider />
                <PostContents dangerouslySetInnerHTML={{__html: post.contents}}>
                </PostContents>
            </PostViewContainer>
        );
    }
}
const PostViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    margin-bottom: 15px;

    > span{
        display: block;
        margin: 10px 20px;
    }
`;
const PostImage = styled.img`
    display: block;
    max-width: 100%;
    width: 800px;
    height: 270px;
`;
const PostTitle = styled.span`
    font-weight: 500;
    text-align: center;
    font-size: 40px;
    margin-left: 20px;
`;
const PostDate = styled.span`
    font-size: 10px;
    > *{
        color: rgba(0, 0, 0, 0.5);
    }
`;
const Devider = styled.span`
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;
const PostContents = styled.span`
    > *{
        line-height: 30px;
        color: rgba(0, 0, 0, 0.8);
    }
    img {
        width: 600px;
    }
`;
export default PostView;
