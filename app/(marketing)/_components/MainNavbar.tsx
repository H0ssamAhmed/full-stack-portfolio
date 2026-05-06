import Logo from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/ThemeToggler'


const MainNavbar = () => {


    return (
        <nav className=' bg-teal-300 w-full'>
            <div className=' mx-auto bg-orange-400   flex items-center justify-between'>
                <div><Logo /></div>
                <div className='flex items-center justify-center gap-4'>
                    <p className="bg-green-500 p-4 m-4 rounded-lg">one</p>
                    <p className="bg-green-500 p-4 m-4 rounded-lg">two</p>
                    <p className="bg-green-500 p-4 m-4 rounded-lg">three</p>
                    <p className="bg-green-500 p-4 m-4 rounded-lg">four</p>
                    <p className="bg-green-500 p-4 m-4 rounded-lg">five</p>
                </div>
                <div>
                    <Button>
                        Login
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar