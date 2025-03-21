import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"


const Navbar = () => {
    const user = undefined
    const isAdmin = false

    return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75
    backdrop-blur-lg transmision-all">
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                <Link href='/' className="flex z-40 font-semibold">
                    case<span className='text-green-600'>cobra</span>
                </Link>

                <div className='h-full flex items-center spece-x-4'>
                    {user ? (
                        <>
                            <Link href='/api/auth/logout' className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>Sign out</Link>
                            {isAdmin ?
                                <Link href='/api/auth/logout' className={buttonVariants({
                                    size: 'sm',
                                    variant: 'ghost',
                                })}>Dashboard ✨</Link> 
                                : null
                            }
                            <Link href='/configure/upload' className={buttonVariants({
                                size: 'sm',
                                className: "hidden sm:flex items-center gap-1",
                            })}>Create case
                                <ArrowRight className='m1-1.5 h-5 w-5' />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href='/api/auth/register' className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>Sign up</Link>

                            <Link href='/api/auth/login' className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>Log in
                            </Link>

                            <div className='h-8 w-px bg-zinc-200 hiddne sm:block' />

                            <Link href='/configure/upload' className={buttonVariants({
                                size: 'sm',
                                className: "hidden sm:flex items-center gap-1",
                            })}>Create case
                                <ArrowRight className='m1-1.5 h-5 w-5' />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
    )
}

export default Navbar