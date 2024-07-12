import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css';
import ele1 from "../../img/ele1.jpg";
import ele2 from "../../img/ele2.jpg";
import ele3 from "../../img/ele3.jpg";
import ele4 from "../../img/ele4.jpg";
import ele5 from "../../img/ele5.jpg";

const data = [
    {
        name: `Apple iPhone 15`,
        img: ele1,
        price: `₹71,999`,
        stars: 4.5,
        link: `https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY/ref=sr_1_4?crid=27Y6KSIKDEJDW&dib=eyJ2IjoiMSJ9.37cBhBAMYjXPqVd9XY2PV1l17rHALpjDndzWbpNnG-WdFVNlFkE5k3U1aDLD2afrwIoNoTZdbOkggMxw0cOeg0LjczcKe6sxitoMv1PW1I20LNmYgLc_e6KA-yq47W9cLahY22dIKte3t-D_eoSiC19Ryeq-Ijs8_NMyWV7-Q9vyUvnu3-DmPEKB9HbMud1sIcwEUs0W35g6EaCjXFw72RcZtaVhVA7_6FwBKki_pUQ.It19Ch2oY6888CrfhkqPnjRkLk3QwWWscsQfbdVFi0k&dib_tag=se&keywords=iphone&qid=1719426724&sprefix=iphon%2Caps%2C262&sr=8-4`
    },
    {
        name: `boAt Rockerz 450`,
        img: ele2,
        price: `₹1,999`,
        stars: 4.1,
        link: `https://www.amazon.in/Rockerz-450-Wireless-Bluetooth-Headphone/dp/B07PR1CL3S/ref=sr_1_3?crid=JGUYLIOGZZVR&dib=eyJ2IjoiMSJ9.fp3q8-ZuzIC-AOyTT8bND5uz764SUpnBxkfCflSoyCVXO55G3AdHan70UkN0ZIaLwADv5rIFYlIW8RMw4q1aIFWF7mNX_KC9kRKwACRGzFt2hEaAp42AyDvUQWXOeH0Q0ZibSnnjlRVdE1clxyehkCn_xd2ntn9-TgOO0a5_B00A_UincxVKUaeHpQMgwH676MlXFgHBcwFLgmOxpRepUIEleAwt76w1CihrkKycaa8.K-HtvpmelbucmcAzo3JTGqfT3b3ncWBfhM-48f3uOIU&dib_tag=se&keywords=headphones&qid=1719426733&sprefix=headphon%2Caps%2C236&sr=8-3`
    },
    {
        name: `Redmi Pad SE`,
        img: ele3,
        price: `₹14,999`,
        stars: 4.0,
        link: `https://www.amazon.in/Redmi-battery-Qualcomm-Snapdragon-Speakers/dp/B0D1C7KM6Y/ref=sr_1_3?crid=33F26N628LP7G&dib=eyJ2IjoiMSJ9.9Mh2k7ma_txZEX0VNVxVGIm18XwGRxcms8pjHa5ylu-Uc_jehKSSxFMBLnHuHzq5LCpH47c3RoRb0Nvf6_BXsNLHw79EkFsVKClbAZrWbC-0QGbOEBDMGjcMr9DcN1z7nTMMI23_lAKA-Vg8Nx2Cq6ZRdV9k4NvasP_XwFs0nPVtH6y-tY1fbKhNgcaMInE0FZzLCt75XiU9-2nQacFVtjDvgoWrEeGOHB5Sr823JP4.DDNgAAH7EzYZdcVqNf1fHI5LXDH-NL1JHLSWD38W5EQ&dib_tag=se&keywords=tablet&qid=1719426744&sprefix=table%2Caps%2C240&sr=8-3&th=1`
    },
    {
        name: `JBL C100SI `,
        img:ele4,
        price: `₹599`,
        stars: 4.1,
        link: `https://www.amazon.in/JBL-C100SI-Ear-Headphones-Black/dp/B01DEWVZ2C/ref=sr_1_4?crid=JGUYLIOGZZVR&dib=eyJ2IjoiMSJ9.fp3q8-ZuzIC-AOyTT8bND5uz764SUpnBxkfCflSoyCVXO55G3AdHan70UkN0ZIaLwADv5rIFYlIW8RMw4q1aIFWF7mNX_KC9kRKwACRGzFt2hEaAp42AyDvUQWXOeH0Q0ZibSnnjlRVdE1clxyehkCn_xd2ntn9-TgOO0a5_B00A_UincxVKUaeHpQMgwH676MlXFgHBcwFLgmOxpRepUIEleAwt76w1CihrkKycaa8.K-HtvpmelbucmcAzo3JTGqfT3b3ncWBfhM-48f3uOIU&dib_tag=se&keywords=headphones&qid=1719426733&sprefix=headphon%2Caps%2C236&sr=8-4`
    },
    {
        name: `Redmi 13C (12GB)`,
        img: ele5,
        price: `₹7,698`,
        stars: 4.1,
        link: `https://www.amazon.in/Starfrost-Storage-Powered-MediaTek-Display/dp/B0CMTY5P4V/ref=sr_1_3?crid=20R7YVRDQ1V2I&dib=eyJ2IjoiMSJ9.HBOVk3KSSfpw0neGfJXMtb-DRGMqxhnLKvLdXPDJGNY3_mybeYR57hMnOIsDMvq1v4RQMyBl4ZlULgqsag2Hr84o_Kq9a9xeJGXSI28796gNRYzOAFnHW24S2A5NKnbDoJYF-ein1oTI7rhNnxhB2E7Z59RcIizJ9JZL0SGKRXqTRG9n5zn5BvidDbt3I7BenIlN6DbFoP-qBUG3kjLNlTp7YE6YXQR9o7jgujEUp8A.tmhRDSoeh5yPzKvZFHXNDM8zs-0i-y5J7sal2dxN4kY&dib_tag=se&keywords=android&qid=1719426760&sprefix=androi%2Caps%2C240&sr=8-3&th=1`
    }
];

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

const ProductCarousel = () => {
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
