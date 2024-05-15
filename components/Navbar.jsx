import { auth } from "@/auth";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";

const Navbar = async ({ navMenu }) => {
    const session = await auth();
    return (
        <nav>
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Stay Swift Logo"
                    width={130}
                    height={200}
                />
            </Link>

            <ul>
                {navMenu && (
                    <li>
                        <Link href="#">Recommended Places</Link>
                    </li>
                )}

                <li>
                    <Link href="/about">About Us</Link>
                </li>

                <li>
                    <Link href="/contact">Contact us</Link>
                </li>

                {navMenu && (
                    <>
                        <li>
                            <Link href="/bookings">Bookings</Link>
                        </li>
                    </>
                )}
                <li>
                    {session?.user ? (
                        <div>
                            <span className="mx-1 font-semibold">
                                {" "}
                                {session?.user?.name.split(" ")[0]}{" "}
                            </span>
                            <Logout />
                        </div>
                    ) : (
                        <Link href="/login" className="login">
                            Login
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
