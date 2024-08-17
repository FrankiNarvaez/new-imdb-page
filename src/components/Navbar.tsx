"use client"
import { FaImdb, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import Card from "./Card";
import { api } from "@/lib/api";
import { resultTrendingMovies, resultTrendingTvShows, resutlTrendingCelebrities } from '@/types/types';
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [type, setType] = useState("movie")
  const [showDropdown, setShowDropDown] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const router = useRouter()

  useEffect(() => {
    const getResultByQuery = async () => {
      try {
        const { data } = await api.get(`search/${type}`, {
          params: {
            query,
          }
        })
        setResults(data?.results)
      } catch (error) {
        console.log(error)
      }
    }
    getResultByQuery()
  }, [query, type])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.replace('/search/tv/interestelar')
  }

  return (
    <div className="fixed left-0 right-0 top-0 px-[6%] md:px-[20%] lg:px-[25%] py-4 flex justify-between items-center bg-zinc-800/50">
      <Link href="/">
        <FaImdb className="w-10 h-10 text-yellow-400 z-10" />
      </Link>
      <section className="flex gap-2">
        <form
          className="flex gap-2"
          onSubmit={handleSubmit}  
        >
          <select 
            name="types"
            className="py-2 px-2 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
            onChange={(e) => {setType(e.target.value);}}  
          >
            <option value="movie">Movies</option>
            <option value="tv">TV shows</option>
            <option value="person">Celebrities</option>
          </select>
          <input 
            type="text" 
            className="rounded-lg px-3 w-10 md:w-36 focus:w-36 text-black" 
            placeholder="Search..."
            onChange={(e) => { setQuery(e.target.value); setShowDropDown(true); }}
            onBlur={() => {
              setTimeout(() => { setShowDropDown(false) }, 2000)
            }}
          />
          <button type="submit" className="bg-yellow-400 p-2 rounded hover:bg-yellow-500/100">
            <FaSearch/>
          </button>
        </form>
      </section>
      {showDropdown && query.length > 0 && (
        <section className="absolute top-20 left-0 right-0 m-auto w-max bg-zinc-900 p-4 rounded-md h-[80vh] overflow-auto grid gap-4 grid-cols-1 md:grid-cols-2">
          {results.map((result: resultTrendingMovies & resultTrendingTvShows & resutlTrendingCelebrities) => (
            <Card
              key={result.id}
              picture={result?.poster_path} 
              title={result?.original_title || result?.name} 
              date={result?.release_date}
              rating={result?.vote_average}
              type={type}
              id={result?.id}
              handleShopDrowDown={() => { 
                setShowDropDown(false);
                setQuery(""); 
              }}
            />
          ))
          }
        </section>
      )}
    </div>
  );
}