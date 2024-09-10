"use client";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Home",
//   description: "The best movies on the best framework.",
// };

const Page = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const response = await (
      await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    ).json();

    setMovies(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {isLoading ? "isLoading..." : JSON.stringify(movies)}
    </div>
  );
};

export default Page;
