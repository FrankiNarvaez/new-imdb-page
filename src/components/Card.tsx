import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import { resultTrendingMovies } from '@/types/types';

export default function Card({ picture, title, date, rating, type, id }: { picture: string, title: string, date: string, rating: number, type: string, id: number }) {
  return (
    <Link href={`${type}/${title}`}>
      <section className='flex flex-col bg-slate-50/10 w-72 p-4 rounded-md'>
        <div>
          <Image className="rounded-sm" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${picture}`} alt="1" width={300} height={300} />
        </div>
        <div className='flex justify-between items-center mt-3'>
          <div>
            <h2>{title}</h2>
            <p className='text-white/40'>{date}</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <FaStar className='text-yellow-400 w-6 h-6' />
            {rating}
          </div>
        </div>
      </section>
    </Link>
  );
}