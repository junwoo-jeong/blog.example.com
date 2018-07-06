import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { List, Home, AssignmentInd } from '@material-ui/icons';

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
                        <StyledLink to="/"><Home /><span>Home</span></StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to="/"><List /><span>Post</span></StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to="/about"><AssignmentInd /><span>About Me</span></StyledLink>
                    </MenuItem>
                </MenuList>
            </MenuTabContainer>
        )
    }
}

const MenuTabContainer = styled.div`
    display: flex;
    position: fixed;
    width:270px;
    left: ${props => props.isMenuTabed ? '0px' : '-320px'};
    height: 100%;
    background-color: #fff;
    flex-direction: column;
    box-shadow: 2px 0 5px rgba(0,0,0,0.3);
    transition: left .25s ease-in-out;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;

const MenuTabHeader = styled.div`
    width: 100%;
    height: 200px;
    background-color: #888;
    margin-bottom: 2px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
`;

const MenuList = styled.ul`
    margin: 0;
    padding: 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    line-height: 40px;
    align-item: center;
`;

const MenuItem = styled.li`
    width: 100%;
    height: 40px;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    background-color: #fff;
    align-items: center;
    color: black;
    > *{
        margin: 5px;
        font-weight: 500;
    }
    > *{
        margin-left: 15px;
    }
    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`;
export default MenuTab;
