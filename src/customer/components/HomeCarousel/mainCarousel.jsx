import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {mainCarouselData}  from './mainCarouselData'


const MainCarousel = () => {
    const items = mainCarouselData.map((item)=> <img src={item.image} className='cursor-pointer' role='presentation' />)

    return (
        <div>
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
        </div>
    )
}

export default MainCarousel;