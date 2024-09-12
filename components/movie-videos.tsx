import { Suspense, useState } from "react";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((videos) => (
        <Suspense key={videos.id} fallback={<h1>loading...</h1>}>
        <iframe
          loading="lazy"
          src={`https://youtube.com/embed/${videos.key}`}
          key={videos.id}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videos.name}
          />
          </Suspense>
          ))}
    </div>
  );
}
