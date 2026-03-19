import { getPopularGames } from "@/lib/rawg";
import GameCard from "@/components/game-card";

export default async function Home() {
  const Populargames = await getPopularGames();
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
      <h1 className="text-3xl font-semibold">Popular Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {Populargames.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
