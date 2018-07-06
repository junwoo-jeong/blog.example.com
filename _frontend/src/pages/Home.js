import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

//import components...
import MenuBar from '../components/MenuBar';
import MenuTab from '../components/MenuTab';
import PostList from '../components/PostList';

class Home extends Component {
    state = {
        isSearched: false,
        isMenuTabed: false,
        posts: [
            {
                id: 1,
                img: 'https://cdn-images-1.medium.com/max/1250/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
                title: 'Serverless 활용하기: MongoDB 기반 RESTful CRUD API 만들기',
                contents: '지난 튜토리얼에서는 Serverless 프레임워크를 사용하여 아주 간단한 API 를 만들어주었습니다. 이번 튜토리얼에서는, Serverless 를 조금 더 활용해서 MongoDB 에 연동한 RESTful CRUD (Create, Remove, Update, Delete) API 를 만들어보겠습니다. 이 튜토리얼은, 지난번에 진행하던 프로젝트에서 이어서 진행하도록 하겠습니다. 만약에 지난 튜토리얼을…',
                date: '2018년 7월 14일'
            },
            {
                id: 2,
                img: 'https://cdn-images-1.medium.com/max/1250/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
                title: 'Serverless 활용하기: MongoDB 기반 RESTful CRUD API 만들기',
                contents: '지난 튜토리얼에서는 Serverless 프레임워크를 사용하여 아주 간단한 API 를 만들어주었습니다. 이번 튜토리얼에서는, Serverless 를 조금 더 활용해서 MongoDB 에 연동한 RESTful CRUD (Create, Remove, Update, Delete) API 를 만들어보겠습니다. 이 튜토리얼은, 지난번에 진행하던 프로젝트에서 이어서 진행하도록 하겠습니다. 만약에 지난 튜토리얼을…',
                date: '2018년 7월 14일'
            },
            {
                id: 3,
                img: 'https://cdn-images-1.medium.com/max/1250/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
                title: 'Serverless 활용하기: MongoDB 기반 RESTful CRUD API 만들기',
                contents: '지난 튜토리얼에서는 Serverless 프레임워크를 사용하여 아주 간단한 API 를 만들어주었습니다. 이번 튜토리얼에서는, Serverless 를 조금 더 활용해서 MongoDB 에 연동한 RESTful CRUD (Create, Remove, Update, Delete) API 를 만들어보겠습니다. 이 튜토리얼은, 지난번에 진행하던 프로젝트에서 이어서 진행하도록 하겠습니다. 만약에 지난 튜토리얼을…',
                date: '2018년 7월 14일'
            },
            {
                id: 4,
                img: 'https://cdn-images-1.medium.com/max/1250/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
                title: 'Serverless 활용하기: MongoDB 기반 RESTful CRUD API 만들기',
                contents: '지난 튜토리얼에서는 Serverless 프레임워크를 사용하여 아주 간단한 API 를 만들어주었습니다. 이번 튜토리얼에서는, Serverless 를 조금 더 활용해서 MongoDB 에 연동한 RESTful CRUD (Create, Remove, Update, Delete) API 를 만들어보겠습니다. 이 튜토리얼은, 지난번에 진행하던 프로젝트에서 이어서 진행하도록 하겠습니다. 만약에 지난 튜토리얼을…',
                date: '2018년 7월 14일'
            },
            {
                id: 5,
                img: 'https://cdn-images-1.medium.com/max/1250/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
                title: 'Serverless 활용하기: MongoDB 기반 RESTful CRUD API 만들기',
                contents: '지난 튜토리얼에서는 Serverless 프레임워크를 사용하여 아주 간단한 API 를 만들어주었습니다. 이번 튜토리얼에서는, Serverless 를 조금 더 활용해서 MongoDB 에 연동한 RESTful CRUD (Create, Remove, Update, Delete) API 를 만들어보겠습니다. 이 튜토리얼은, 지난번에 진행하던 프로젝트에서 이어서 진행하도록 하겠습니다. 만약에 지난 튜토리얼을…',
                date: '2018년 7월 14일'
            },
            {
                id: 6,
                img: 'https://cdn-images-1.medium.com/max/1250/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
                title: 'Serverless 활용하기: MongoDB 기반 RESTful CRUD API 만들기',
                contents: '지난 튜토리얼에서는 Serverless 프레임워크를 사용하여 아주 간단한 API 를 만들어주었습니다. 이번 튜토리얼에서는, Serverless 를 조금 더 활용해서 MongoDB 에 연동한 RESTful CRUD (Create, Remove, Update, Delete) API 를 만들어보겠습니다. 이 튜토리얼은, 지난번에 진행하던 프로젝트에서 이어서 진행하도록 하겠습니다. 만약에 지난 튜토리얼을…',
                date: '2018년 7월 14일'
            },
            {
                id: 7,
                img: 'https://cdn-images-1.medium.com/max/1250/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
                title: 'Serverless 활용하기: MongoDB 기반 RESTful CRUD API 만들기',
                contents: '지난 튜토리얼에서는 Serverless 프레임워크를 사용하여 아주 간단한 API 를 만들어주었습니다. 이번 튜토리얼에서는, Serverless 를 조금 더 활용해서 MongoDB 에 연동한 RESTful CRUD (Create, Remove, Update, Delete) API 를 만들어보겠습니다. 이 튜토리얼은, 지난번에 진행하던 프로젝트에서 이어서 진행하도록 하겠습니다. 만약에 지난 튜토리얼을…',
                date: '2018년 7월 14일'
            },
        ]
    }

    handleOnClickedSearch = () => {
        const { isSearched } = this.state;
        if(isSearched) {
            this.setState({
                isSearched: false
            });
        }else{
            this.setState({
                isSearched: true
            })
        }
    }

    handleOnClickedMenuTab = () => {
        const { isMenuTabed } = this.state;
        if(isMenuTabed){
            this.setState({
                isMenuTabed: false
            });
        }else{
            this.setState({
                isMenuTabed: true
            })
        }
    }

    render() {
        const {
            isSearched,
            isMenuTabed,
            posts
        } = this.state;

        const {
            handleOnClickedSearch,
            handleOnClickedMenuTab
        } = this;

        return (
            <Fragment>
                <MenuBar
                    isSearched={isSearched}
                    onClickedSearch={handleOnClickedSearch}
                    onClickedMenuTab={handleOnClickedMenuTab} />
                <MenuTab
                    isMenuTabed={isMenuTabed}/>
                <FilledLayout />
                <Container>
                    <PostList posts={posts} />
                </Container>
            </Fragment>
        )
    }
}
const FilledLayout = styled.div`
    width: 100%;
    height: 50px;

`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default Home;
