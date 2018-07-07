import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

//import components...
import MenuBar from '../components/MenuBar';
import MenuTab from '../components/MenuTab';

class MenuContainer extends Component {
    state = {
        isSearched: false,
        isMenuTabed: false
    }

    _handleOnClickedSearch = () => {
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

    _handleOnClickedMenuTab = () => {
        const { isMenuTabed } = this.state;
        if(isMenuTabed){
            this.setState({
                isMenuTabed: false
            });
        }else{
            this.setState({
                isMenuTabed: true
            });
        }
    }

    render() {
        const {
            isSearched,
            isMenuTabed
        } = this.state;

        const {
            _handleOnClickedSearch,
            _handleOnClickedMenuTab
        } = this;

        return (
            <Fragment>
                <MenuBar
                    isSearched={isSearched}
                    onClickedSearch={_handleOnClickedSearch}
                    onClickedMenuTab={_handleOnClickedMenuTab} />
                <MenuTab
                    isMenuTabed={isMenuTabed}/>
                <FilledLayout />
            </Fragment>
        );
    }
}

const FilledLayout = styled.div`
    width: 100%;
    height: 50px;
`;
export default MenuContainer;
