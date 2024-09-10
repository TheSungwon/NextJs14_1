import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Home",
  description: "The best movies on the best framework.",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const response = await (await fetch(API_URL)).json();
  return response;
};

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const movies = await getMovies();
  return (
    <div>
      <h1>hello</h1>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default HomePage;
