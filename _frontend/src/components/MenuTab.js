import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class MenuTab extends Component {
    render() {
        const { isMenuTabed } = this.props;

        return(
            <MenuTabContainer isMenuTabed={isMenuTabed}>
                <MenuTabHeader>
                    asdasdads
                </MenuTabHeader>
                <MenuList>
                    <MenuItem>
                        <StyledLink to="/">asdasd</StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to="/about">asdasd</StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to="/about/1">asdasd</StyledLink>
                    </MenuItem>
                </MenuList>
            </MenuTabContainer>
        )
    }
}

const MenuTabContainer = styled.div`
    display: flex;
    position: fixed;
    width:320px;
    left: ${props => props.isMenuTabed ? '0px' : '-320px'};
    height: 100%;
    flex-direction: column;
    box-shadow: 2px 0 5px gray;
    transition: left .25s ease-in-out;
`;

const MenuTabHeader = styled.div`
    width: 100%;
    height: 200px;
    background-color: #888;
`;

const MenuList = styled.ul`
    margin: 0;
    padding: 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
`;

const MenuItem = styled.li`
    width: 100%;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    display:block;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    background-color: #fff;
    font-weight: 300;
    color: black;

    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`;

export default MenuTab;
