import React, { useEffect, useState } from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../slide/slide';
import Posts from '../posts/posts';
import './main-content.css';
import 'swiper/css';

const MainContent = () => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([]);
    const [isSlideLoading, setIsSlideLoading] = useState(false);
    const [activeCompany, setActiveCompany] = useState()
    const [idActive, setIdActive] = useState()

    const fetchData = async () => {
        setIsSlideLoading(true);
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        setIsSlideLoading(false);
    }
    useEffect(()=> {
        fetchData()
        handleClick(2, 'Deckow-Crist')
    }, [])

    const handleClick = async(id, name) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}&_limit=3`)
        .then(response => response.json())
        .then(json => setPosts(json))
        setActiveCompany(name)
        setIdActive(id)
    }
    
    return (
        <div className='main-content'>
            {isSlideLoading
            ?   
            <div className='user'>
                <p className='slide-name'>
                    Идет загрузка...
                </p> 
            </div>
            :
            <div className='main'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation = {
                        {
                        nextEl : '.rightArrow',
                        prevEl : '.leftArrow'
                        }
                    }
                    breakpoints = {
                        {
                        1300 : {
                                slidesPerView: 4,
                                spaceBetween: 50
                            }, 
                        1024 : {
                                slidesPerView: 3,
                                spaceBetween: 50
                            }, 
                            
                        800 : {
                            slidesPerView: 2,
                            spaceBetween: 50
                        },
                        350 : {
                            slidesPerView: 1,
                            spaceBetween: 50
                        },
                        0 : {
                            slidesPerView: 1,
                            spaceBetween: 50
                        }
                    }
                        
                    }
                     
                >
                    {users.map (user => 
                        <SwiperSlide key = {user.id}>
                            <div className='slider-one' onClick = { () => handleClick(user.id, user.company.name)}>   
                                <Slide 
                                    user = {user} 
                                    idActive = {idActive}
                                />
                            </div>  
                        </SwiperSlide>
                    )}
                </Swiper>
                <Posts 
                    posts = {posts}
                    activeCompany = {activeCompany}
                />
            </div>
            }
        </div>    
    );
};

export default MainContent;