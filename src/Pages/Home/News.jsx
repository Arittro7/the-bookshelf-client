import React, { useEffect, useState } from 'react';
import NewsCard from '../../Components/News/NewsCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const News = () => {

  const [newsData, setNewsData] = useState([])

  useEffect(() =>{
    fetch("news.json")
      .then(res => res.json())
      .then(data => setNewsData(data))
  },[])
  return (
    <div>
      <h1 className='text-2xl font-semibold'>News for Bookies</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
        newsData.map((news, index)=>(
          <SwiperSlide><NewsCard key={index} news={news}></NewsCard></SwiperSlide>
        ))
      }
        
      </Swiper>
      
    </div>
  );
};

export default News;