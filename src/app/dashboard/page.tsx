import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ButtonLogout from "../components/ButtonLogout";
import QRCodeGenerator from "../components/QRCodeGenerator";
import Header from "../components/Header";

export default async function Page() {
  const session = await getServerSession();

  if(!session) {
    redirect("/");
  }

  return (
    <div>
      <Header/>
      <QRCodeGenerator/>
    </div>
  );
}
