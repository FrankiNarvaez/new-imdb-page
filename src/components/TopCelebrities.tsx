"use client"
import { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "@/lib/api";
import { resutlTrendingCelebrities } from "@/types/types"

export default function TopCelebrities() {
  const [celebrities, setCelebrities] = useState([])

  useEffect(() => {
    const getTrendingCelebrities = async () => {
      try {
        const { data } = await api.get('trending/person/day', {
          params: {
            language: 'en-US'
          }
        })
        setCelebrities(data?.results)
      } catch (error) {
        console.log(error)
      }
    }

    getTrendingCelebrities()
  }, [])

  return (
    <section className="px-[6%] md:px-[20%] lg:px-[25%]">
      <h2 className="text-gray-300 text-3xl py-6">Top Celebrities</h2>
      <section className="grid grid-flow-col gap-4 overflow-x-auto">
        {celebrities.map((celebrity: resutlTrendingCelebrities ) => (
          <Card
            key={celebrity.id}
            picture={celebrity?.profile_path}
            title={celebrity?.original_name}
            date=""
            rating={celebrity?.popularity}
            type={celebrity?.media_type}
            id={celebrity?.id}
            handleShopDrowDown={() => {}}
          />
        ))}
      </section>
    </section>
  );
}