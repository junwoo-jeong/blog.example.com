// Nav.js
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Menu, Search } from '@material-ui/icons';
import SearchBar from './SearchBar';

class MenuBar extends Component{
    render() {
        const {isSearched ,onClickedSearch, onClickedMenuTab } = this.props;
        return (
            <Fragment>
                <SearchBar
                    isSearched={isSearched}
                    onClickedSearch={onClickedSearch}
                />
                <NavWrapper>
                    <MenuButton onClick={onClickedMenuTab}>
                        <Menu />
                    </MenuButton>
                    <Title>
                        <span>ㅎㅇㅇㅎㅎㅇㅎㅇㅎㅇ</span>
                    </Title>
                    <SearchButton onClick={onClickedSearch}>
                        <Search />
                    </SearchButton>
                </NavWrapper>
            </Fragment>
        )
    }
}
const NavWrapper = styled.nav`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #ff1744;
    justify-content: space-between;
    box-shadow: 0 5px 5px rgba(0,0,0,0.3);
    position: fixed;
    z-index: 1;
`;

const MenuButton = styled.div`
    line-height: 60px;
    margin-left: 10px;
    color: #fff;
    &:hover{
        color: #ffebee;
        cursor: pointer;
    }
`;

const Title = styled.div`
    color: #fff;
    span {
        line-height: 50px;
        font-size: 1.5em;
        font-weight: 600;
    }

`;

const SearchButton = styled.div`
    color: #fff;
    line-height: 60px;
    margin-right: 10px;
    &:hover{
        color: #ffebee;
        cursor: pointer;
    }
`;

export default MenuBar;
