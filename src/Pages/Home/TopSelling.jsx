import { useEffect, useState } from "react";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSelling = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold mb-6">Top Selling</h1>

      {/* category filtering */}
      <select name="category" id="category">
        {
          categories.map((category, index) =>(
            <option key={index} value={category}>{category}</option>
          ))
        }
      </select>
    </div>
  );
};

export default TopSelling;
