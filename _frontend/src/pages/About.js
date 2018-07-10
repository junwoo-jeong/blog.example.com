import React from 'react';
import queryString from 'query-string';

import PostEditor from '../components/PostEditor';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    return (
        <div>
            <h2>About {match.params.name}</h2>
            <PostEditor />
        </div>
    );
};

export default About;
