import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "../../Components/Books/BookCard";

const Recommend = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
      fetch("books.json")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, []);
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold mb-6">Recommend for you</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination ,Navigation]}
        className="mySwiper"
      >
         {
         books.length > 0 && books.slice(8, 18).map((book, index) => (
          <SwiperSlide>
            <BookCard key={index} book={book}></BookCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommend;