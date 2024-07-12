import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return (
        <span>
            {text.substring(0, maxLength)}
            <br />
            <span style={{ color: 'orange' }}> ...Read more</span>
        </span>
    );
};

const ProductCarousel = ({ data }) => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false, // Disable slide shadows to avoid clipping
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slider-item">
                            <div className="slider-image">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="slider-content">
                                <h3 className="slider-title">{truncateText(item.name, 10)}</h3>
                                <p className="slider-price">{item.price}</p>
                                <p>
                                    Rating:
                                    {[...Array(Math.round(item.stars))].map((_, i) => (
                                        <span key={i} className="text-yellow-500">&#9733;</span>
                                    ))}
                                </p>
                                <a href={item.link} className="slider-link">View on Amazon</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
