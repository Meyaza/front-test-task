import React, { useEffect, useState } from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cover from '../cover/cover';
import './slider.css';
import 'swiper/css';

const Slider = () => {
    const [users, setUsers] = useState([])
    const [isSlideLoading, setIsSlideLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [idActive, setIdActive] = useState()
    const fetchData = async () => {
        setIsSlideLoading(true);
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        setIsSlideLoading(false);
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleClick = async(id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}&_limit=3`)
        .then(response => response.json())
        .then(json => setPosts(json))
        setIdActive(id)
    }
    useEffect(() => {
        handleClick(2)
    }, [])
    
    return (
        <div className='slider-main'>
            {isSlideLoading
            ?   
            <div className='user'>
                    <p className='slide-name'>
                        Идет загрузка...
                    </p> 
            </div>
            :
            <div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation = {
                        {
                        nextEl : '.rightArrow',
                        prevEl : '.leftArrow'
                        }
                    }
                >
                    {users.map (user => 
                            <SwiperSlide key = {user.name}>
                                <div className= 'user' onClick = { () => handleClick(user.id)}>
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
                            </SwiperSlide>
                    )}
                </Swiper>
                <div className='posts'>
                    <div className='post-name'>
                        {idActive !== null 
                        ? 
                        <p>3 актуальных поста {users[idActive - 1].company.name}</p>
                        : ''
                        }
                    </div>
                    <div className='post-content'>
                        {posts.map (post =>
                            <div key = {post.name}>
                               <p className='post-title'> {post.title}</p>
                               <p className='post-body'> {post.body}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            }
        </div>    
    );
};

export default Slider;