import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import nextImage from '../../public/interestelar.jpg';

export default function Card() {
  return (
    <section className='flex flex-col bg-slate-50/10 w-72 p-4 rounded-md'>
      <div>
        <Image className="rounded-sm" src={nextImage} alt="1" width={300} height={300} />
      </div>
      <div className='flex justify-between items-center mt-3'>
        <div>
          <h2>Interestelar</h2>
          <p className='text-white/40'>2014</p>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <FaStar className='text-yellow-400 w-6 h-6' />
          9.9
        </div>
      </div>
    </section>
  );
}