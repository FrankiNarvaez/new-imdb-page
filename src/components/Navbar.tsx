"use client"
import { FaImdb, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";

export default function Navbar() {
  const [type, setType] = useState("movies")
  const [showDropdown, setShowDropDown] = useState(false)
  const [query, setQuery] = useState("")

  return (
    <div className="fixed left-0 right-0 px-[5%] md:px-[20%] lg:px-[25%] py-4 flex justify-between items-center bg-zinc-800/50">
      <Link href="/">
        <FaImdb className="w-14 h-10 text-yellow-400 z-10" />
      </Link>
      <section className="flex gap-2">
        <select 
          name="types"
          className="py-2 px-2 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
          onChange={(e) => {setType(e.target.value);}}  
        >
          <option value="movies">Movies</option>
          <option value="tvshows">TV shows</option>
          <option value="celebrities">Celebrities</option>
        </select>
        <input 
          type="text" 
          className="rounded-lg px-3 w-10 md:w-36 focus:w-36 text-black" 
          placeholder="Search..."
          onChange={(e) => {setQuery(e.target.value); setShowDropDown(true)}}
        />
        <button className="bg-yellow-400 p-2 rounded hover:bg-yellow-500/100">
          <FaSearch/>
        </button>
      </section>
      {showDropdown && query.length > 0 && (
        <section className="absolute bg-zinc-500/20 p-4 rounded-md h-[80vh] overflow-auto top-20 z-50 grid gap-4 grid-cols-1 md:grid-cols-2"><Card /><Card /><Card /><Card /></section>
      )}
    </div>
  );
}