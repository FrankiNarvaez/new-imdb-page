import Image from 'next/image';
import ImageIn from '../../../public/interestelar.jpg'
import { FaStar } from 'react-icons/fa';

export default function Info() {
  return (
    <section className='mt-20 px-[6%] md:px-[20%] lg:px-[25%] py-4'>
      <div className='absolute md:w-1/2 md:h-1/2 w-2/3 h2/3 -z-10'>
        <div className='absolute w-full h-full bg-gray-500/70  rounded-lg'></div>
        <Image src={ImageIn} alt="Im" width={300} height={300} className='w-full h-full rounded-lg'/>
      </div>
      <section className='p-4 flex flex-col md:flex-row'>
        <Image src={ImageIn} alt="Im" width={300} height={300} className='rounded-md'/>
        <div className='pl-4'>
          <h3 className='text-4xl pb-2'>Interestelar</h3>
          <h4 className='text-zinc-100 text-xl italic pb-2'>La humanidad nació en la Tierra. Nunca estuvo destinada a morir aquí</h4>
          <p className='text-3xl pb-2'>Overview</p>
          <p className='pb-2'>Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.</p>
          <p className='pb-2'>Aventura, Drama, Ciencia ficción</p>
          <div className='flex items-center gap-3'>
            <FaStar className='text-yellow-500 w-6 h-6'/>
            <span>9</span>
          </div>
        </div>
      </section>
    </section>
  );
}