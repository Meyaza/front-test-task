import React from 'react';
import Post from '../post/post';
import Icon from '../UI/icon/icon';
import './posts.css'
import './media.css'

const Posts = ({posts, activeCompany}) => {
    return (
        <div className='posts'>
            <div className='icon-title'>
                <div className='icon'>
                    <Icon/>
                </div>
                <div className='post-name'>
                    <p>3 актуальных поста {activeCompany}</p>
                </div>
            </div>
            <div className='post-content'>
                {posts.map (post =>
                    <Post 
                        post = {post}
                    />
                )}
            </div>
        </div>
    );
};

export default Posts;