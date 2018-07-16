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

    componentDidMount() {
        this._getPosts();
        window.addEventListener('scroll', this._handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll);
    }

    _handleScroll = () => {
        const { isLoding } = this.state;
        if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight && !isLoding) {
            this.setState({
                isLoding: true
            });
            setTimeout(() => {
                this._getPosts();
                this.setState({
                    isLoding: false
                });
            }, 3000);
            console.log("onevent");
            console.log(this.state);
        }
    }

    _getPosts = async () => {
        const {page, posts} = this.state;

        const result = await this._callApiNewPage(page);
        const newStatePosts = posts.concat(result);
        this.setState({
            page: page+1,
            posts: newStatePosts
        });
        console.log(this.state);
    }

    _callApiNewPage = (page) => {
        return fetch(`http://localhost:3001/api/post?page=${page}`)
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
    }

    _createItems = () => {
        const { posts } = this.state;
        return posts.map((post, index) => {
            return <PostItem
                key={index}
                post={post} />
        });
    }
    render() {
        const { _createItems } = this;
        return (
            <PostList>
                {_createItems()}
                {<ReactLoading type='bubbles' color='#b1bfca' height={50} width={200} />}
            </PostList>
        )
    }
}

const PostList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    margin-top: 20px;
`;

export default PostListContainer;
