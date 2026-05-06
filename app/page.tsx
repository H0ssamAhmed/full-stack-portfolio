
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ThemeToggler";
import Link from "next/link";
import MainNavbar from "./(marketing)/_components/MainNavbar";
import { getHomeService } from "@/lib/services/Home.service";



export default async function Home() {
  const { experiences, projects, skills, certificates } = await getHomeService()


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
