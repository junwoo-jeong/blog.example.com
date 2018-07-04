import React, { Fragment } from 'react';
import MenuBar from '../components/MenuBar';
import styled from 'styled-components';
const Home = () => {
    return (
        <Fragment>
            <MenuBar />
            <FilledLayout />
            <div>
            </div>
        </Fragment>
    );
};
const FilledLayout = styled.div`
    width: 100%;
    height: 50px;
`;
const Container = styled.div`
    display: flex;
    width: 100%;

`;
export default Home;
