import { resolve } from "path";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Home",
  description: "The best movies on the best framework.",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const response = await (await fetch(URL)).json();
  return response;
};

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const movies = await getMovies();
  return (
    <div>
      <h1>hello</h1>
      {movies ? JSON.stringify(movies) : "isLoading..."}
    </div>
  );
};

export default HomePage;
