import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ThemeToggler";
import Link from "next/link";


export default function Home() {
  return (
    <div className=' flex items-center justify-center h-screen flex-col gap-4'>
      <ModeToggle />
      <h1 className="bg-linear-to-r from-primary to-accent  font-extrabold px-5 py-2 ">Dashborad Page</h1>
      <Link href={"/dashboard"}>
        <Button>

          Dashborad Page
        </Button>
      </Link>
    </div>
  );
}
