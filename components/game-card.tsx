import React from "react";
import type { RAWGGame } from "@/types/rawg";
import Image from "next/image";

interface GameCardProps {
  game: RAWGGame;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="rounded-xl h-50 relative overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
      <Image
        src={game.background_image ?? "/placeholder.jpg"}
        alt={game.name}
        fill
        className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
      />
      <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 px-4 py-2 bg-linear-to-t from-black z-20   ">
        <h3 className="text-white text-sm font-semibold">{game.name}</h3>
      </div>
      <div className="absolute flex items-center justify-center top-2 right-2 z-20 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
        <span className="text-yellow-400 text-xs font-bold">
          ⭐ {game.rating}
        </span>
      </div>
    </div>
  );
};

export default GameCard;
