import { Container } from "./container"
import { Logo } from "./icons/logo"
import Link from "next/link"

export const Header = () => {
    return (
        <>
            {/* ==== Header ==== */}
            <header>
                <Container>
                    <Link className="flex items-center text-md" href="/">
                        <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
                    </Link>
                    <nav className="">
                        <ul>
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
                </Container>
            </header>
        </>
    )
}