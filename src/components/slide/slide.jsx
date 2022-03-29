import React from 'react';
import Cover from '../cover/cover';
import './slide.css'

const Slide = ({user, idActive}) => {
    return (
        <div className= 'user'>
            <Cover
                act = {user.id === idActive ? true : false}
                image={`https://i.pravatar.cc/320?img=${user.id}`} 
            >  
            </Cover>
            <p className={user.id === idActive ? 'slide-name activeName' : 'slide-name'}>
                {user.name}
            </p>
            <p className={user.id === idActive ? 'slide-company activeName' : 'slide-company'}>
                {user.company.name}
            </p>
        </div>
    );
};

export default Slide;
