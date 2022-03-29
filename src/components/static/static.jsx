import React from 'react';
import Svg from '../UI/svg/svg';
import ButtonLeft from '../UI/button-left/button-left';
import ButtonRight from '../UI/button-right/button-right';
import './static.css';
import './media.css';

const Static = () => {
    return (
        <div className='static'>
            <div className='svg-1'>
                <Svg/>
            </div>
            <div className='svg-2'>
                <Svg/>
            </div>
            <div className='title'>
                <p className='title-content'>Наши топ-блогеры</p>
                <p className='text-content'>Лучше специалисты в своем деле, средний опыт работы в профессии - 27 лет</p>
            </div>
            <div className='navigation'>
                <div className='leftArrow'>
                    <ButtonLeft/>
                </div>
                <div className='rightArrow'>
                    <ButtonRight/>
                </div>
            </div>
        </div>
    );
};

export default Static;