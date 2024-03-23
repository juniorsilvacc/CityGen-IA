"use client"

import { signIn } from "next-auth/react";

export default function ButtonLogin() {
  return (
    <main>
      <button
        onClick={() => signIn("google", {callbackUrl: "/"})}
        className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </main>
  );
}
