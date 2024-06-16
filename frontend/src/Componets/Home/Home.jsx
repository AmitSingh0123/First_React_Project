import React from "react";
import HomeImage from "../../../public/image.png";

function Home() {
  return (
    <main className="w-full px-20 py-10 mt-10">
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
          <img src={HomeImage} alt="image" className="h-full"/>
        </div>
      </section>
      <section>
        <h2 className="text-5xl text-black font-semibold">Our Books..</h2>
        <div>
          
        </div>
      </section>
    </main>
  );
}

export default Home;
