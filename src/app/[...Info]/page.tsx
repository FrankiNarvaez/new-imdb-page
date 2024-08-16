"use client"
import Image from 'next/image';
import ImageIn from '../../../public/interestelar.jpg'
import { FaStar } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { resultTrendingMovies, resultTrendingTvShows, resutlTrendingCelebrities } from '@/types/types';

const GENRES = [
  { "id": 28, "name": "Action" },
  { "id": 12, "name": "Adventure" },
  { "id": 16, "name": "Animation" },
  { "id": 35, "name": "Comedy" },
  { "id": 80, "name": "Crime" },
  { "id": 99, "name": "Documentary" },
  { "id": 18, "name": "Drama" },
  { "id": 10751, "name": "Family" },
  { "id": 14, "name": "Fantasy" },
  { "id": 36, "name": "History" },
  { "id": 27, "name": "Horror" },
  { "id": 10402, "name": "Music" },
  { "id": 9648, "name": "Mystery" },
  { "id": 10749, "name": "Romance" },
  { "id": 878, "name": "Science Fiction" },
  { "id": 10770, "name": "TV Movie" },
  { "id": 53, "name": "Thriller" },
  { "id": 10752, "name": "War" },
  { "id": 37, "name": "Western" },
  { "id": 10759, "name": "Action & Adventure" },
  { "id": 10762, "name": "Kids" },
  { "id": 10763, "name": "News" },
  { "id": 10764, "name": "Reality" },
  { "id": 10765, "name": "Sci-Fi & Fantasy" },
  { "id": 10766, "name": "Soap" },
  { "id": 10767, "name": "Talk" },
  { "id": 10768, "name": "War & Politics" }
];

export default function Info() {
  const [info, setInfo] = useState<resultTrendingMovies & resultTrendingTvShows & resutlTrendingCelebrities>()
  const pathname = usePathname()
  const [,type, query] = pathname.split("/")

  useEffect(() => {
    const getInfo = async () => {
      try {
        const { data } = await api.get(`search/${type}`, {
          params: {
            query,
            language: 'en-US'
          }
        })
        setInfo(data?.results[0])
      } catch (error) {
        console.log(error)
      }
    }

    getInfo()
  }, [type, query, pathname])

  return (
    <section className='mt-20 px-[6%] md:px-[20%] lg:px-[25%] py-4'>
      <div className='absolute md:w-1/2 md:h-1/2 w-2/3 h2/3 -z-10'>
        <div className='absolute w-full h-full bg-gray-500/70  rounded-lg'></div>
        <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${info?.backdrop_path}`} alt="Im" width={300} height={300} className='w-full h-full rounded-lg'/>
      </div>
      <section className='p-4 flex flex-col md:flex-row'>
        <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${info?.poster_path || info?.profile_path}`} alt="Im" width={300} height={300} className='rounded-md'/>
        <div className='pl-4'>
          <h3 className='text-4xl pb-2'>{info?.original_title || info?.name}</h3>
          <h4 className='text-zinc-100 text-xl italic pb-2'>La humanidad nació en la Tierra. Nunca estuvo destinada a morir aquí</h4>
          <p className='text-3xl pb-2'>Overview</p>
          <p className='pb-2'>{info?.overview}</p>
          <p className='pb-2'>
            {info?.genre_ids?.map((genre: number) => (
              GENRES.map((genre_c) => (
                genre_c.id === genre ? genre_c.name : ""
              ))
            ))}
          </p>
          <div className='flex items-center gap-3'>
            <FaStar className='text-yellow-500 w-6 h-6'/>
            <span>9</span>
          </div>
        </div>
      </section>
    </section>
  );
}