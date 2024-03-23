"use client"

import { signOut } from "next-auth/react";

export default function ButtonLogout() {
  return (
    <main>
      <button
        onClick={() => signOut()}
        className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </main>
  );
}
