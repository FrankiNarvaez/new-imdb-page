import Card from "./Card";

export default function TopMovies() {
  return (
    <section className="px-[6%] md:px-[20%] lg:px-[25%] mt-20">
      <h2 className="text-gray-300 text-3xl py-6">Top Movies</h2>
      <section className="grid grid-flow-col gap-4 overflow-x-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}