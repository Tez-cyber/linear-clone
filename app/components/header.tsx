import { Button } from "./button"
import { Container } from "./container"
import { Logo } from "./icons/logo"
import Link from "next/link"

export const Header = () => {
    return (
        <>
            {/* ==== Header ==== */}
            <header className="fixed top-0 left-0 w-full border-b border-transparent-white">
                <Container className="flex h-[var(--nav-height)]">
                    <Link className="flex items-center text-md" href="/">
                        <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
                    </Link>
                    {/* ========= nav links ========= */}
                    <nav className="h-full">
                        <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6">
                            <li className="">
                                <Link href="#">Features</Link>
                            </li>
                            <li className="">
                                <Link href="#">Method</Link>
                            </li>
                            <li className="">
                                <Link href="#">Customers</Link>
                            </li>
                            <li className="">
                                <Link href="#">Changelog</Link>
                            </li>
                            <li className="">
                                <Link href="#">Integrations</Link>
                            </li>
                            <li className="">
                                <Link href="#">Pricing</Link>
                            </li>
                            <li className="">
                                <Link href="#">Company</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* ==== ===== */}
                    <div className="ml-auto h-full flex items-center">
                        <Link className="text-sm mr-6" href="#">Log in</Link>
                        <Button href="#">Sign up</Button>
                    </div>
                </Container>
            </header>
        </>
    )
}