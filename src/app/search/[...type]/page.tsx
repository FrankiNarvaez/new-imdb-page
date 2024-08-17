"use client"
import { useParams } from "next/navigation";
export default function Search() {
  const p = useParams()
  console.log(p)
  
  return (
    <section>
      Page to search
    </section>
  );
}