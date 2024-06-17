import React, { useEffect, useState } from "react";
import BookData from "../../../public/list.json";
import Card from "../Cards/Card";

function Course() {
  const [freeBooks, setFreeBooks] = useState([]);

  useEffect(() => {
    const findFreeBooks = () => {
      return BookData.filter((book) => book.book_type === "Paid");
    };
    setFreeBooks(findFreeBooks());
  }, []);
  return (
    <div className="w-full h-full bg-white">
      <div className="flex overflow-hidden gap-5 items-center flex-wrap py-32 justify-center"> 
        {freeBooks.map((item, index) => (
          <Card item={item}  key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Course;
