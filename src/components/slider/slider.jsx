import React, { useEffect, useState } from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
import 'swiper/css';
import Cover from '../cover/cover';


const Slider = () => {
    const [sliders, setSliders] = useState([])
    const [isSlideLoading, setIsSlideLoading] = useState(false);
    const fetchData = async () => {
        setIsSlideLoading(true);
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setSliders(json))
        setIsSlideLoading(false);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='slider-main'>
            {isSlideLoading
            ?   
            <div className='slide-content'>
                <div className='slide-text'>
                    <p>
                        Идет загрузка....
                    </p>
                    <p className='slide-name'>
                        Идет загрузка...
                    </p>
                </div>
                <div className='slide-avatar'/>    
            </div>
            :
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
                {sliders.map (slide => 
                        <SwiperSlide key = {slide.name}>
                          
                       
                                    <div className='user'>
                                        <Cover
                                            image={`https://i.pravatar.cc/320?img=${slide.id}`} 
                                        >
                                            
                                        </Cover>
                                        <p className='slide-name'>
                                        {slide.name}
                                        </p>
                                        <p className='slide-company'>
                                        {slide.company.name}
                                        </p>

                         
                   
                           </div>
                        </SwiperSlide>
            )}
            </Swiper>
            }

        </div>    
    );
};

export default Slider;