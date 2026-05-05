
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ThemeToggler";
import Link from "next/link";
import MainNavbar from "./(marketing)/_components/MainNavbar";

const getHomeData = async () => {
  const response = await fetch("/api/home");
  const data = await response.json();
  console.log(data);

  return data;
}


export default async function Home() {
  await getHomeData()


  return (
    <main className=' flex items-center justify-center h-screen flex-col gap-4'>
      <MainNavbar />
      <ModeToggle />
      <h1 className="bg-linear-to-r from-primary to-accent  font-extrabold px-5 py-2 ">Dashborad Page</h1>
      <Link href={"/dashboard"}>
        <Button>
          Dashborad Page
        </Button>
      </Link>
      <Link href={"/articles"}>
        <Button>
          Articles Page
        </Button>
      </Link>
      <Link href={"/projects"}>
        <Button>
          Projects Page
        </Button>
      </Link>
    </main>
  );
}
