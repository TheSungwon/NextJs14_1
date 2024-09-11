import Link from "next/link";
import { useEffect, useState } from "react";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

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
  await new Promise((resolve) => setTimeout(resolve, 100));
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default HomePage;
