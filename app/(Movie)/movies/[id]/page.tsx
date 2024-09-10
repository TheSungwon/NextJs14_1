import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  //   const movie = await getMovie(id);
  const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);

  console.log(movie);
  console.log(video);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <h1>Movie {movie.title}</h1>
      <h1>video {video.name}</h1>
    </>
  );
}
