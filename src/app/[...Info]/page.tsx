import Image from 'next/image';
import ImageIn from '../../../public/interestelar.jpg'

export default function Info() {
  return (
    <section className='flex'>
      <Image src={ImageIn} alt="Im" width={300} height={300}/>
      <div>
        <h3>Interestelar</h3>
        La humanidad nació en la Tierra. Nunca estuvo destinada a morir aquí.
        <p>Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.</p>
        <p>Aventura, Drama, Ciencia ficción</p>
        9 stars
      </div>
    </section>
  );
}