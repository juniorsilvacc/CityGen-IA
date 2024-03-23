"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function HeroSection() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section className="container flex flex-col mx-auto items-center px-4 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
      <div className="mt-10 text-center">
        <span className="text-green-600 font-bold text-4xl sm:text-5xl font-signika-negative">
          CityQR Generation
        </span>
        <h2 className="mt-6 text-center dark:text-slate-100 text-xl">
          Create personalized QR Codes using artificial intelligence.
        </h2>
        <h4 className="mt-2 text-center dark:text-slate-100">
          Interact with other urban enthusiasts from around the world and share
          your creations.
        </h4>
      </div>

      {session ? (
        <button
          className="bg-green-600 hover:bg-green-500 text-white font-normal py-2 px-4 rounded-3xl mt-6"
          onClick={() => router.push("/dashboard")}
        >
          Start generating now!
        </button>
      ) : (
        <button 
          className="bg-green-600 hover:bg-green-500 text-white font-normal py-2 px-4 rounded-3xl mt-6"
          onClick={() => signIn("google", {callbackUrl: "/"})}
        >
          Start generating!
        </button>
      )}
    </section>
  );
}
