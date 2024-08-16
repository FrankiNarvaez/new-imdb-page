"use client"
import { api } from "@/lib/api";
import Card from "./Card";
import { useState, useEffect } from "react"
import { resultTrendingTvShows} from "@/types/types";

export default function TopTvShows() {
  const [tvShows, setTvshows] = useState([])

  useEffect(() => {
    const getTrendingTvShows = async () => {
      try {
        const { data } = await api.get('trending/tv/day', {
          params: {
            language: 'es-Mx'
          }
        })
        setTvshows(data?.results)
      } catch (error) {
        console.log(error)
      }
    }

    getTrendingTvShows()
  }, [])

  return (
    <section className="px-[6%] md:px-[20%] lg:px-[25%]">
      <h2 className="text-gray-300 text-3xl py-6">Top TV shows</h2>
      <section className="grid grid-flow-col gap-4 overflow-x-auto">
        {tvShows.map((tvShow: resultTrendingTvShows) => (
          <Card 
            key={tvShow.id}
            picture={tvShow?.poster_path} 
            title={tvShow?.original_name} 
            date={tvShow?.first_air_date}
            rating={tvShow?.vote_average}
            type={tvShow?.media_type}
          />
        ))}
      </section>
    </section>
  );
}