import React, { useEffect, useState } from "react";
import HomeImage from "../../../public/image.png";
import Card from "../Cards/Card";
import BookData from '../../../public/list.json'

function Home() {
  const [freeBooks, setFreeBooks] = useState([]);

  useEffect(() => {
    const findFreeBooks = () => {
      return BookData.filter(book => book.book_type === "Free");
    };
    setFreeBooks(findFreeBooks());
  }, []);
  return (
    <main className="w-full px-20 py-10 mt-10 bg-white">
      <section className="flex gap-10 items-center container h-full">
        <div className="w-1/2">
          <h1 className="text-black text-4xl">
            Welcome to{" "}
            <span className="text-blue-400 font-medium">
              Our Online Book Store
            </span>
            , your ultimate literary haven! Dive into a world of diverse genres,
            connect with fellow readers, and discover your next great read.
          </h1>

          <p className="mt-10 text-xl text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, rem? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Placeat voluptas quia dolores laudantium?
            Perspiciatis corporis, eveniet eaque suscipit consectetur qui.
          </p>
          <div className="mt-10">
            <div className="join w-full border">
              <input
                className="input input-bordered join-item w-full bg-white text-black border-blue-700 border-2 outline-blue-700"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-full bg-blue-700 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={HomeImage} alt="image" className="h-full" />
        </div>
      </section>
      <section>
        <h2 className="text-5xl text-black font-semibold border-b-blue-700 border-b-4 p-2">Our Free Books..</h2>
        <div className="flex overflow-hidden gap-5 items-center flex-wrap mt-10">
          {freeBooks.map((item,index)=><Card item={item} key={index}/>)}

          <Card />
        </div>
      </section>
    </main>
  );
}

export default Home;
