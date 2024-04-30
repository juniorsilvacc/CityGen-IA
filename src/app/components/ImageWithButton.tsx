"use client";

import { useSession, signOut } from "next-auth/react";
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
          className="h-12 w-12 object-cover rounded-full cursor-pointer"
          onClick={toggleVisibility}
        />
      )}

      {isShown && (
        <div
          className="p-4 w-60 absolute top-12 right-8 rounded shadow-lg z-20 border
        dark:bg-[#171717] bg-white
        dark:border-slate-600 border-gray-200"
        >
          <ul>
            <li className="px-2 text-sm">{session?.user?.name}</li>
            <li className="px-2 text-xs text-inherit mb-3 dark:text-slate-400">
              {session?.user?.email}
            </li>
            <li className="px-2 text-xs text-inherit mb-4 dark:text-slate-400">
              5 Credits remaining
            </li>
            <li className="p-2 rounded cursor-pointer hover:bg-slate-800">
              Buy credits
            </li>
            <li className="p-2 rounded cursor-pointer hover:bg-slate-800">
              Generate
            </li>
            <li className="p-2 rounded cursor-pointer hover:bg-slate-800">
              My Icons
            </li>
            <li className="p-2 rounded cursor-pointer hover:bg-slate-800">
              Community icons
            </li>
            <button className="p-2 rounded cursor-pointer hover:bg-slate-800"
            onClick={() => { toggleVisibility(); signOut(); }}
            >
              Logout
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
