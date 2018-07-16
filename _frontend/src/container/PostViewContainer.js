import React, { Component } from 'react';
import styled from 'styled-components';
import PostView from '../components/PostView';

class PostViewContainer extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        this._getPost();
    }
    componentWillUnmount() {

    }
    _getPost = async () => {
        const { match } = this.props;
        console.log(match.params.title);
        if(!match.params.title) throw new Error('title undefined');
        const result = await this._callApiPost(match.params.title);
        this.setState({
            post: result
        })

    }

    _callApiPost = (title) => {
        return fetch(`http://localhost:3001/api/post/${title}`)
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
    }

    render() {
        const { post } = this.state;
        return (
            <Container>
                <PostView post={post} />
            </Container>
        )
    }
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
    margin-top: 20px;
`;
export default PostViewContainer;
