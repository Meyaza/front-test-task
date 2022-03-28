import React from 'react';
import './cover.css';


const Cover = ({image = ''}) => {
    return (
        <div className='blog-cover' style={{ backgroundImage: `url(${image})` }}>
        </div>
    );
};

export default Cover;