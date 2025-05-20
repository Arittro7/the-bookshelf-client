import { useState } from "react";
import BookCard from "../../Components/Books/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/Features/Books/booksAPI";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSelling = () => {
  const [activeCategory, setActiveCategory] = useState("Choose a genre");

  const {data: books = []} = useFetchAllBooksQuery();
 
  const filterBooks =
    activeCategory === "Choose a genre"
      ? books
      : books.filter((book) => book.category === activeCategory.toLowerCase());

  console.log(filterBooks);

  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold mb-6">Top Selling</h1>

      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setActiveCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-yellow-400 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
         filterBooks.length > 0 && filterBooks.map((book, index) => (
          <SwiperSlide>
            <BookCard key={index} book={book}></BookCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSelling;
