import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <Image
                    src={Logo}
                    alt="Stay Swift Logo"
                    width={130}
                    height={180}
                />
            </Link>

            <ul>
                <li>
                    <Link href="#">Recommended Places</Link>
                </li>

                <li>
                    <Link href="#">About Us</Link>
                </li>

                <li>
                    <Link href="#">Contact us</Link>
                </li>

                <li>
                    <Link href="/bookings">Bookings</Link>
                </li>

                <li>
                    <Link href="/login" class="login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
