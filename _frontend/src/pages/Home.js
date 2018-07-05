import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

//import components...
import MenuBar from '../components/MenuBar';
import MenuTab from '../components/MenuTab';

class Home extends Component {
    state = {
        isSearched: false,
        isMenuTabed: false
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
            isMenuTabed
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
    background-color: red;
    width: 100%;
    flex-grow: 1;
`;

export default Home;
