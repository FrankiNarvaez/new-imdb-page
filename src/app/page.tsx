import MovieTop from "@/components/MovieTop"
import TopCelebrities from "@/components/TopCelebrities"
import TopMovies from "@/components/TopMovies"
import TopTvShows from "@/components/TopTvShows"

const DATA = [
  { image: 'https://picsum.photos/seed/random101/500/500' },
  { image: 'https://picsum.photos/seed/random102/500/500' },
  { image: 'https://picsum.photos/seed/random103/500/500' },
]

export default function Home() {
  return (
    <main>
      <TopMovies />
      <TopTvShows />
      <TopCelebrities />
    </main>
  )
}
