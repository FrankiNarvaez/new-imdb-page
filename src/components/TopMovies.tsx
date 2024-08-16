"use client"
import { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "@/lib/api";
import { resultTrendingMovies } from "@/types/types";

export default function TopMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { data } = await api.get('trending/movie/day', {
          params: { 
            language: 'es-MX'
          }
        });
        setMovies(data?.results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <section className="px-[6%] md:px-[20%] lg:px-[25%] mt-20">
      <h2 className="text-gray-300 text-3xl py-6">Top Movies</h2>
      <section className="grid grid-flow-col gap-4 overflow-x-auto">
        {movies.map((movie: resultTrendingMovies) => (
          <Card
            key={movie.id} 
            picture={movie?.poster_path} 
            title={movie?.original_title} 
            date={movie?.release_date}
            rating={movie?.vote_average}
            type={movie?.media_type}
            id={movie?.id}
          />
        ))}
      </section>
    </section>
  );
}
