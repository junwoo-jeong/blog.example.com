import React, { Component } from 'react';
import styled from 'styled-components';
import PostItem from '../components/PostItem';
import ReactLoading from 'react-loading';

class PostListContainer extends Component {
    state = {
        isLoding: false,
        page: 1,
        posts: []
    }
    _getPosts = async () => {
        const { page } = this.state;

        return await fetch(`/api/post?page=${page}`)
        .then(res => res.json())
        .catch(err => console.log(err));
    }
    _createItems = () => {
        const { posts } = this.state;
        return posts.map(post => {
            return <PostItem
                key={post.id}
                img={post.img}
                title={post.title}
                date={post.date}
                contents={post.contents} />
        })
    }
    render() {
        const { _createItems } = this;
        return (
            <PostList>
                {_createItems()}
                <ReactLoading type='bars' color='#ffcccb' height={50} width={50} />
            </PostList>
        )
    }
}

const PostList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    margin-top: 20px;
`;

export default PostListContainer;
