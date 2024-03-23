import { getServerSession } from "next-auth";
import Link from "next/link";
import ButtonLogin from "./ButtonLogin";

export default async function Header() {
  const session = await getServerSession();

  const userImage = session?.user?.image;

  return (
    <nav className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-lg border-slate-700">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8 lg:h-24 ">
        <Link className="flex items-center gap-4" href="/">
          <h2 className="text-green-500 font-bold text-4xl">CityGen</h2>
        </Link>
        <div className="flex items-center gap-4">
          {session ? (
            <img src={userImage} alt="User Profile" className="max-w-10 max-h-10 rounded-3xl" />
          ) : (
            <ButtonLogin />
          )}
        </div>
      </div>
    </nav>
  );
}
