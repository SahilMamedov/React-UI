// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            //spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
           // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide> <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg'/> </SwiperSlide>
            <SwiperSlide><img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-7.jpg'/></SwiperSlide>

            ...
        </Swiper>
    );
};