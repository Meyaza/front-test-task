import React from 'react';
import './post.css'

const Post = ({post}) => {
    return (
        <div className='post'>
            <p className='post-title'> {post.title}</p>
            <p className='post-body'> {post.body}</p>
        </div>
        )
    ;
};

export default Post;