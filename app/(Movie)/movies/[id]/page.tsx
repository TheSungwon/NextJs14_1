import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
  title: "Movies",
};
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  //   const movie = await getMovie(id);

  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    // <Suspense>는 await을 해줌
    <>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
