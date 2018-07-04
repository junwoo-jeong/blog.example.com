import React,{ Component, Fragment } from 'react';
import styled from 'styled-components';
import {Close} from '@material-ui/icons';

const SearchBar = ({search, _handleSearch}) => {
    return (
        <SearchWrapper search={search}>
            <SearchInput placeholder="search"/>
            <SearchCancel onClick={_handleSearch}><Close/></SearchCancel>
        </SearchWrapper>
    )
}
const SearchWrapper = styled.form`
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    visibility: ${props => props.search ? 'visible' : 'hidden'};
    opacity: ${props => props.search ? '1':'0'};
    transition: visibility 0s linear 0.22s, opacity 0.22s linear;
    transition-delay: 0s;
    background-color: blue;
    box-shadow: 0 10px 10px gray;
    z-index: 10;
`;

const SearchInput = styled.input`
    flex: 9;
    height: 48px;
    background-color: #fff;
    border: none;
    padding-left: 20px;
    font-weight: 600;
`;
const SearchCancel = styled.div`
    width: 50px;
    height: 50px;
    line-height:60px;
    text-align: center;
    background-color: #fff;
    font
    &:hover{
        color:#888;
        cursor: pointer;
    }
`;
export default SearchBar;
