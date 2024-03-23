"use client"

import { useSession, signOut  } from "next-auth/react";
import { useState } from "react";

export default function ImageWithButton() {
  const { data: session } = useSession();
  const [isShown, setIsShown] = useState(false);

  const userImage = session?.user?.image;

  const toggleVisibility = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="relative">
      {session && (
        <img
          src={userImage}
          alt="Imagem"
          className="max-w-10 max-h-10 rounded-3xl"
          onClick={toggleVisibility}
        />
      )}

      {isShown && (
        <button
          className="bg-green-600 text-white px-3 py-1 absolute rounded top-full left-0 transform -translate-x-16 -translate-y-2"
          onClick={() => { toggleVisibility(); signOut(); }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
