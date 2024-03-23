import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ButtonLogout from "../components/ButtonLogout";

export default async function Page() {
  const session = await getServerSession();

  if(!session) {
    redirect("/");
  }

  const userImage = session.user?.image;

  return (
    <div>
      <div>Olá {session.user?.name} </div>
      {userImage && (
        <div>
          <img src={userImage} alt="User Profile" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
      <h1>Dashboard</h1>
      <ButtonLogout/>
    </div>
  );
}
