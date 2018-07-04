// Nav.js
import React,{ Component, Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Menu, Search } from '@material-ui/icons';
import SearchBar from './SearchBar';

class MenuBar extends Component {
    state = {
        search: false
    }
    _handleSearch = () => {
        const stateSearch = this.state.search;
        if(stateSearch){
            this.setState({
                search: false
            });
        }else{
            this.setState({
                search: true
            });
        }
    }
    render () {
        const {_handleSearch} = this;
        const {search} = this.state;

        return (
            <Fragment>
                <SearchBar
                    search={search}
                    _handleSearch={_handleSearch}
                />
                <NavWrapper>
                    <MenuButton>
                        <Menu />
                    </MenuButton>
                    <Title>
                        <span>title</span>
                    </Title>
                    <SearchButton onClick={_handleSearch}>
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
    box-shadow: 0 5px 5px gray;
    position: fixed;
    z-index: 1;
`;

const MenuButton = styled.div`
    line-height: 60px;
    margin-left: 10px;
    color: #fff;
    &:hover{
        color:#888;
    }
`;

const Title = styled.div`
    color: #fff;
    span {
        line-height: 50px;
        font-size: 1.5em;
    }

`;

const SearchButton = styled.div`
    color: #fff;
    line-height: 60px;
    margin-right: 10px;
    &:hover{
        color:#888;
        cursor: pointer;
    }
`;

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: flex-end;
`;

const NavItem = styled.li`
    width: 100px;
    background-color: #1f4f1d;
    a {
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        transition: color .25s ease-in-out;

        &:hover {
         color: #888;
        }
    }
`;

export default MenuBar;
