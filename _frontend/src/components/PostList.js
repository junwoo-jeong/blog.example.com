import React, { Component } from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

class PostList extends Component {
    render() {
        const { posts } = this.props;
        const PostItems = posts.map(post => {
            return <PostItem
                key={post.id}
                img={post.img}
                title={post.title}
                date={post.date}
                contents={post.contents} />
        });
        return (
            <PostListContainer>
                {PostItems}
            </PostListContainer>
        )
    }
}
const PostListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 20px;

`;

export default PostList;
