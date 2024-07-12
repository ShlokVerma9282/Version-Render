import React, { useState } from "react";
import "swiper/css";
import ProductCarousel from "./Coverflow";
import baby1 from '../../img/baby1.jpg';
import baby2 from '../../img/baby2.jpg';
import baby3 from '../../img/baby3.jpg';
import baby4 from '../../img/baby4.jpg';
import Amazon1 from "../../img/amazon1.jpg";
import Amazon2 from "../../img/amazon2.jpg";
import Amazon3 from "../../img/amazon3.jpg";
import Amazon4 from "../../img/amazon4.jpg";
import Amazon5 from "../../img/amazon5.jpg";
import Amazon6 from "../../img/amazon6.jpg";
import Amazon7 from "../../img/amazon7.jpg";
import ele1 from "../../img/ele1.jpg";
import ele2 from "../../img/ele2.jpg";
import ele3 from "../../img/ele3.jpg";
import ele4 from "../../img/ele4.jpg";
import ele5 from "../../img/ele5.jpg";
import a1 from "../../img/a1.jpg";
import a2 from "../../img/a2.jpg";
import a3 from "../../img/a3.jpg";
import a4 from "../../img/a4.jpg";
import a5 from "../../img/a5.jpg";
import a6 from "../../img/a6.jpg";
import g1 from "../../img/g1.jpg";
import g2 from "../../img/g2.jpg";
import g3 from "../../img/g3.jpg";
import g4 from "../../img/g4.jpg";
import g5 from "../../img/g5.jpg";
import g6 from "../../img/g6.jpg";

const App = () => {
  const [carouselTitle, setCarouselTitle] = useState("Best Gift For Babies");
  const [carouselData, setCarouselData] = useState(data1); // Initial data
  const [activeButton, setActiveButton] = useState('babies');

  const handleButtonClick = (newTitle, newData, button) => {
    setCarouselTitle(newTitle);
    setCarouselData(newData);
    setActiveButton(button);
  };

  const getButtonClassNames = (button) => {
    const baseClasses = 'w-24 px-4 py-2 text-sm font-medium border border-orange-400 focus:z-10';
    const activeClasses = 'bg-orange-400 text-white';
    const inactiveClasses = 'text-orange-400 bg-white hover:bg-gray-100';

    return `${baseClasses} ${activeButton === button ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="mt-10">
      <div className="items-center justify-center mb-10">
        <div className="text-black text-3xl md:text-4xl lg:text-5xl font-bold text-center fuzzy-bubbles-bold">
          Recent Selections
        </div>
        <div className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-bold text-center fuzzy-bubbles-bold mt-2">
          Best Buys
        </div>
      </div>
      <div className="inline-flex rounded-xl shadow-sm t ml-10 " role="group">
        <button
          type="button"
          className={getButtonClassNames('babies')}
          onClick={() => handleButtonClick("Best Gifts For Babies", data1, 'babies')}
        >
          Babies
        </button>
        <button
          type="button"
          className={getButtonClassNames('kids')}
          onClick={() => handleButtonClick("Best Gifts For Kids", data2, 'kids')}
        >
          Kids
        </button>
        <button
          type="button"
          className={getButtonClassNames('youth')}
          onClick={() => handleButtonClick("Best Gifts For Youth", data3, 'youth')}
        >
          Youth
        </button>
        <button
          type="button"
          className={getButtonClassNames('adult')}
          onClick={() => handleButtonClick("Best Gifts For Adults", data4, 'adult')}
        >
          Adult
        </button>
        <button
          type="button"
          className={getButtonClassNames('elderly')}
          onClick={() => handleButtonClick("Best Gifts For Elderly", data5, 'elderly')}
        >
          Elderly
        </button>
      </div>
      <div className="flex flex-col xl:flex-row h-auto ml-10 mt-5 xl:items-center justify-center xl:justify-between">
        <div className="flex flex-col w-full xl:w-1/2 items-center xl:items-start text-center xl:text-left mb-8 xl:mb-0">
          <div className="font-bold text-black text-3xl xl:text-5xl fuzzy-bubbles-bold">
            {carouselTitle.split(' ').slice(0, 2).join(' ')} {/* "Best Gift" */}
          </div>
          <div className="font-bold text-orange-500 text-3xl xl:text-5xl fuzzy-bubbles-bold">
            {carouselTitle.split(' ').slice(2).join(' ')} {/* Remaining part, e.g., "For Babies" */}
          </div>
        </div>
        <div className="relative w-full xl:w-9/12 flex justify-center xl:justify-end">
          <ProductCarousel data={carouselData} />
        </div>
      </div>
    </div>
  );
};

const data1 = [
  {
    name: 'MOMITTLE Baby Nail Trimmer New Born with Lights',
    img: baby1,
    price: '₹345',
    stars: 4.2,
    link: 'https://www.amazon.in/dp/B0CRPMWWMP?&linkCode=ll1&tag=genaigifts05-21&linkId=834469d9117bd176925422d798d40b92&language=en_IN&ref_=as_li_ss_tl'
},
{
    name: 'Hopscotch Girls Cotton All-Over Print',
    img: baby2,
    price: '₹526',
    stars: 4.3,
    link: 'https://www.amazon.in/dp/B0CRZ2ZSMQ?&linkCode=ll1&tag=genaigifts05-21&linkId=efb11e127f18131c75decfd99581bdbf&language=en_IN&ref_=as_li_ss_tl'
},
{
    name: 'Himalaya Powder For Baby',
    img: baby3,
    price: '₹328',
    stars: 4.4,
    link: 'https://www.amazon.in/dp/B07PSJW32L?linkCode=ll1&tag=genaigifts05-21&linkId=88e1674c0940d60eaf67a9a47acb0979&language=en_IN&ref_=as_li_ss_tl&th=1'
},
{
    name: 'Himalaya Gentle Baby Soap Value Pack',
    img: baby4,
    price: '₹180',
    stars: 4.4,
    link: 'https://www.amazon.in/dp/B00ZTSOJSM?th=1&linkCode=ll1&tag=genaigifts05-21&linkId=c46a6609468ec2787265bacd0d89e753&language=en_IN&ref_=as_li_ss_tl'
},
{
    name: 'MOMITTLE Baby Nail Trimmer New Born with Lights',
    img: baby1,
    price: '₹345',
    stars: 4.2,
    link: 'https://www.amazon.in/dp/B0CRPMWWMP?&linkCode=ll1&tag=genaigifts05-21&linkId=834469d9117bd176925422d798d40b92&language=en_IN&ref_=as_li_ss_tl'
},
{
    name: 'Himalaya Powder For Baby',
    img: baby3,
    price: '₹328',
    stars: 4.4,
    link: 'https://www.amazon.in/dp/B07PSJW32L?linkCode=ll1&tag=genaigifts05-21&linkId=88e1674c0940d60eaf67a9a47acb0979&language=en_IN&ref_=as_li_ss_tl&th=1'
}
];

const data2 = [
  {
    name: `JUGTE Motivational Water Bottle 1 litre Sipper Bottle For Adults With Time Measurement Non-Toxic Water bottle for office,Water bottle for gym (Pink) |Plastic`,
    img: Amazon6,
    price: `₹383`,
    stars: 4,
    link: `https://www.amazon.in/JUGTE-Motivational-Water-Bottle-Measurement/dp/B0C3ZNLC5Y?crid=1VVOK24XAXRMW&dib=eyJ2IjoiMSJ9.5kzsTg3MZkHwI_qKqbWQXsT1-uUOQhY_LEgAteD05rHsQXxL3_T0TAAwOtkwsNBtyRX0mnoMt-KVU3bP5kKaNXObBfpP6g-be1cITyFoJcpbYp91jnNg-CRayBR378g84UQYrDomlX9yioQQZ6ZJdyrYoD389Hy7KAMDBmR6-c7kle4hzqb40VkPWFGXBSQLMe0VvG4pFKDv_L0xfeLqeBLSWrQk0bQC93jeItr88XwXe1pW0NwGN0NTTScJQqg6-9ReP0KAIxnNLDkcs1QnAj4kBGMxRgv2W31OUZwa2tw.HaAXHIrKxq1j9VsZ0N6Z5cwU1QE0ijlwluOUClWB8ns&dib_tag=se&keywords=water%2Bbottle%2Bfor%2Bhome&qid=1716447784&refinements=p_n_format_browse-bin%3A19560801031&rnid=14277549031&s=kitchen&sprefix=waterb%2Caps%2C194&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=genaigifts-21&linkId=cc345d67672a52a69fcbe7521f6254ea&language=en_IN&ref_=as_li_ss_tl`
},
{
    name: `Clara 925 Sterling Silver Heart Pendant Necklace | With or Without Chain | Gift for Women and Girls`,
    img: Amazon1,
    price: `₹2057`,
    stars: 3,
    link: `https://www.amazon.in/Sterling-Pendant-Necklace-Rhodium-Zirconia/dp/B09XNB3DZX?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=24T4YV94DEENMF2GX90W&linkCode=ll1&tag=genaigifts-21&linkId=28813b7cfe29d1353c36425292578222&language=en_IN&ref_=as_li_ss_tl`
},
{
    name: `ZAVERI PEARLS Set Of 2 Rose Gold Dazzling Austrian Diamonds Bracelet For Women-ZPFK16864`,
    img: Amazon2,
    price: `₹488`,
    stars: 4,
    link: `https://www.amazon.in/ZAVERI-PEARLS-Dazzling-Austrian-Women-ZPFK16864/dp/B0CLJL9FCS?crid=2Y3Z8AIMY85S2&dib=eyJ2IjoiMSJ9.-08jI0CCEQ0UGh_eZ1-uAPgdruXKIc-xehk23PqNzQ5IJYCbiJdjK0O8sO5FLeeRSb0WPoQTBuKr4Xt6yb9ZYX623GJEhnijsSENZYiNH8pchySgxVk2qN7d2QI2EnxPEbYcg9XzCbM_llNV2Pk9JROct5X9M8f4pO4tJQk-DIBSw9hyphjyqnv5fIXEgT4A7QFrUk7oFH6w7TbBmm5Er68zroACz4e5k3qU5zD6FYoX2n2r-3MPdkTg3vy3T3wUGKlGIcS7zh8AygAZBiAJMvsfzT_jzvYlaqMGfmcywDo.u4sEpLdDtYtejLHBYlTBZ32ELLjedHiSRl0GfyX6iks&dib_tag=se&keywords=women+jewellery&qid=1716056381&s=jewelry&sprefix=women+%2Cjewelry%2C224&sr=1-7&linkCode=ll1&tag=genaigifts-21&linkId=4f075341f7bc9e052814dabd7f84225a&language=en_IN&ref_=as_li_ss_tl`
},
{
    name: `Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)`,
    img: Amazon3,
    price: `₹649`,
    stars: 3.8,
    link: `https://www.amazon.in/Lymio-Cargo-Cotton-Cargos-Cargo-01-04/dp/B0CTQCP2BZ?crid=33PG2ACNJYYWI&dib=eyJ2IjoiMSJ9.kRgEYwRxnS_S6jIfPMaFcKCDA69yXX0c9L-QQH1yHIn2l80RZjd0_E2IX5Ho7bx97DHeM0uv7N2sKko6K9RrwsnZ7Nwa0-YbWgHvmG9F1gukx_Vx6b7kCTJFAet-PvhE4muauIX4Ddz0PY3h4A_L-P_kt7v9YfRhsbCoNwo7UtCp6AAFlf1gcd3oIhz0RR7exzljk6A3eVGHzW5rzOYnep-THbFmvWmVGlNkfhPPcMY-K3idFPNeiVZDeW31SyLJtJvvcshzxF_Uht6AtEGZMr27yfg.C44D1qPrc0iVqqicmsV-N5VxtK0t39ddds2sPxZJ9Kg&dib_tag=se&keywords=men%27s+fashion+clothing&qid=1715633288&refinements=p_n_style_browse-bin%3A19556480031&rnid=19556479031&s=apparel&sprefix=men%27s+fa%2Cfashion%2C220&sr=1-34&linkCode=ll1&tag=genaigifts-21&linkId=6ac24d5f16b57a86f06cf6fdfba69c98&language=en_IN&ref_=as_li_ss_tl`
},
{
    name: `Nintendo Switch OLED model With Neon Red & Neon Blue Joy-Con`,
    img: Amazon4,
    price: `₹30,999`,
    stars: 3.9,
    https:'//www.amazon.in/s?k=nintendo+switch&crid=2VGUW8V12XO01&sprefix=nin%2Caps%2C238&ref=nb_sb_ss_ts-doa-p_1_3'
    },
{
    name: `NIVIA 4981-C PITCH-3.0 Football Studs Shoes For Men(White)`,
    img: Amazon5,
    price: `₹823`,
    stars: 3.4,
    link: `https://www.amazon.in/NIVIA-4981-C-PITCH-3-0-Football-White/dp/B0C27W29P8?crid=4SYAJLOHDQZX&dib=eyJ2IjoiMSJ9.-ZTdmXKibiy6HfpbhF_lMP6_JcprwrWuPbCdeEDgDAH-O7XIdIYeJ2TxKslLE-cIC1cDEK_Y21gONSk28UyN_1gmGFmnOTXKRTpZ-ES6Tx_fTBruK-t5sZo8RgnU5iUys9wSk38fQXZrPLOaYZ7YhXekSxVDCqByRB1Z8zP8lmMkADdu2CEmo-0U56mnGulE9Y6iFgfZZRTQF6NbA6TYXmVHLHzkFX8FO2S8bDCQqCLx-lyFDZx-m9_6tNGt0_6eQm04kbiHrThUMowW31gGzSgLqZimvgrG.2y8I72CnYvLZB3hbHf5T0H5pDNW7hWV9G5n7m-0IfrPKdnSQ&dib_tag=se&keywords=men+shoes&qid=1716015315&s=apparel&sprefix=men%27s+sho%2Cfashion%2C259&sr=1-30&linkCode=ll1&tag=genaigifts-21&linkId=351ce40f3f2036c5b145500b2ea755d6&language=en_IN&ref_=as_li_ss_tl`
},
{
    name: `Nerf Elite 2.0 Volt SD-1 Blaster -- 6 Official Nerf Darts, Light Beam, Built-in Dart Storage -- Compatible with Nerf Elite Darts`,
    img: Amazon7,
    price: `₹529`,
    stars: 4.3,
    link: `https://www.amazon.in/Nerf-Elite-2-0-Volt-Blaster/dp/B08SLL5Z3S?crid=2ISDBUWE4UAWG&dib=eyJ2IjoiMSJ9.kA0-0KPyxSg1p7k7CIUQumwSPgNesbZjUom5itqlZGuFoqHqYHdWyZBdDFpC0NkXk-4xwyGuCNqj-l75UN-6VS4Aa8rKoKbbUmyDhwoaDL5H11C-SFffiy_YYmtqcfmn95kUsy6FM7nUE95e3Uz2L4yP0mT_w4KpKZJlR9NFlz-PoxZxlBpd6ZKRLsZQEFgw5M9ZFsAFT-JJCMydAN4MkmRbOXZqxPSSUlqIdVLMnBtzXn-m81Luh9yMoUjDLmAYo-5mPF9mnb8RsJ6G3v2a3HR5ojxPPY1Kg.3RJbZ4wqEoJDf_zMC8vxu3H8ajNyCdAlZjS50-n0PknM&dib_tag=se&keywords=kids+toys&qid=1715897582&refinements=p_89%3ANERF&rnid=3837712031&s=toys&sprefix=kid%2Ctoys%2C195&sr=1-1&linkCode=ll1&tag=genaigifts-21&linkId=7f9f20e5ae9fa154f907206e0d6b88d8&language=en_IN&ref_=as_li_ss_tl`
}
];

const data3 = [
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

const data4 = [
  {
    name: `Titan Raga Women's Viva Trendsetter Rose Gold Watch-NS2642WM01`,
    img: a1,
    price: `₹4175`,
    stars: 4.3,
    link: `https://www.amazon.in/dp/B08HCLZPTG?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
},
{
    name: `Philips Pro Beard Trimmer and Styler| Titanium blades| 2.5x higher precision| Beard Sense tech|5 mins quick charge| 20 length settings| 6X longer battery life| New Model - BT3441/30`,
    img: a2,
    price: `₹1,495`,
    stars: 4.3,
    link: `https://www.amazon.in/dp/B0C7VV7B8Y?tag=genaigifts05-21&linkCode=osi&th=1`
},
{
    name: `Noise ColorFit Ultra 3 Bluetooth Calling Smart Watch with Biggest 1.96" AMOLED Display, Premium Metallic Build, Functional Crown, Gesture Control with Silicon Strap (Teal Blue)`,
    img: a3,
    price: `₹2,499`,
    stars: 4.2,
    link: `https://www.amazon.in/dp/B0BVR8CGJW?tag=genaigifts05-21&linkCode=osi&th=1`
},
{
    name: `BIBA Women Straight Kurta Palazzo Suit Set`,
    img: a4,
    price: `₹2,188`,
    stars: 4.1,
    link: `https://www.amazon.in/dp/B0CLVCYH5F?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
},
{
    name: `Forest Essentials Roop Nikhar & Gulab Ubtan | Ayurvedic Face Mask for Dry Skin | Gentle Exfoliating Face Pack | Gives Smooth Radiant and Brighter Complexion | With Rose & Pistachio`,
    img: a5,
    price: `₹675`,
    stars: 4.1,
    link: `https://www.amazon.in/dp/B0CM9BK9YD?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
}
,
{
    name: `Khadi Natural Bhringraj Hair Oil For Controlling Hair Fall, Nourishing Oil For Healthy Hair Growth, Paraben & Silicone-Free Suitable For All Hair Types, 210ml`,
    img: a6,
    price: `₹121`,
    stars: 4.1,
    link: `https://www.amazon.in/dp/B008KH6DDI?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
}
];

const data5 = [
  {
    name: `ARAA PAVA Mini Massager Handheld, Neck Massager, Mini Portable Electric Muscle Massage Guns, Personal Body Massager Muscle Relieve Guns for Relief Hurts and Deep Tissue Massage Relaxation Ruftup`,
    img: g1,
    price: `₹449`,
    stars: 4.3,
    link: `https://www.amazon.in/dp/B0D72HQY8Y?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
},
{
    name: `RECLUSE Folding Cane with Led Light - Height Adjustable, Anti-Skid, Lightweight Portable Walking Stick with LED Light for Senior Citizens, Elderly, Patients & Handicapped and Hiking Camping`,
    img: g2,
    price: `₹799`,
    stars: 4.3,
    link: `https://www.amazon.in/dp/B0CRVP49GY?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
},
{
    name: `Omron HEM 7120 Fully Automatic Digital Blood Pressure Monitor With Intellisense Technology For Most Accurate Measurement - Arm Circumference (22-32Cm)`,
    img: g3,
    price: `₹1,959`,
    stars: 4.2,
    link: `https://www.amazon.in/dp/B00F38B3NW?tag=genaigifts05-21&linkCode=osi&th=1`
},
{
    name: `AGARO Rejoice Foot, Calf and Leg Massager with Heat and Vibration, 80W, 4 Motors, Rolling & Kneading Functions for Pain Relief & Improving Blood Circulation, Corded Electric, Grey`,
    img: g4,
    price: `₹13,499`,
    stars: 4.1,
    link: `https://www.amazon.in/dp/B091Q3RCG8?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
},
{
    name: `P.J.Handicrafts™ Brass Horse Cart Showpiece with Multicolour Stone Work| Statue for Home Decor | Gift | Size - (L-5" x B-2.5" x H-3")`,
    img: g5,
    price: `₹815`,
    stars: 4.1,
    link: `https://www.amazon.in/dp/B0CY9J9G5Z?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
}
,
{
    name: `Vellarr 10.5" Tall Ceramic Flower Vase, Traditional Totem Style, Minimalist Face Design, Decorative Modern Floral Glazed Ceramic Vases for Centerpieces, Bedroom, Office, Wedding or Living Room (White)`,
    img: g6,
    price: `₹8,099`,
    stars: 4.1,
    link: `https://www.amazon.in/dp/B089LNJZ6M?tag=genaigifts05-21&linkCode=osi&th=1&psc=1`
}
];

export default App;
