import { useRouter } from "next/router";
import React from "react";
import { BiPlay } from "react-icons/bi";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
     bg-white
     rounded-md
     py-1 md:py-2
     px-2 md:px-4
     w-auto
     text-xl lg:text-lg
     font-semibold
     flex
     flex-row
     items-center
     hover:gb-neutral-300
     transition
    "
    >
      <BiPlay size={30} />
      Play
    </button>
  );
};

export default PlayButton;
