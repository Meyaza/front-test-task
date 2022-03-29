import React from 'react';
import './cover.css';


const Cover = ({image = '', act}) => {
    return (
        <div className={act === true ? 'cover active' : 'cover'} style= {{backgroundImage: `url(${image})` }}>
        </div>
    );
};

export default Cover;