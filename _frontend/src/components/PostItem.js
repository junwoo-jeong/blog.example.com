import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostItem = ({ img, title, date, contents }) => {
    return(
        <PostItemContainer>
            <Link to='/home'>
                <PostImage src={img} />
            </Link>
            <PostTitle to='/home'><StyledLink to='/home'>{title}</StyledLink></PostTitle>
            <PostDate to='/home'><StyledLink to='/home'>{date}</StyledLink></PostDate>
            <Devider />
            <PostContents>{contents}</PostContents>
        </PostItemContainer>
    )
}

const PostItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    margin-bottom: 15px;

    > span{
        display: block;
        margin: 10px 20px;
    }
`;

const PostImage = styled.img`
    display: block;
    max-width: 100%;
    width: 600px;
    height: 270px;
`;

const PostTitle = styled.span`
    font-weight: 700;
    font-size: 20px;
    > *{
        color: rgba(0, 0, 0, 0.8);
    }
`;

const PostDate = styled.span`
    font-size: 10px;
    > *{
        color: rgba(0, 0, 0, 0.5);
    }

`;

const PostContents = styled.span`
    font-size: 14px;
    > *{
        color: rgba(0, 0, 0, 0.8);
    }
`;

const Devider = styled.span`
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;
const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default PostItem;
