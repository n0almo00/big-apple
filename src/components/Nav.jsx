import { Link } from "react-router-dom"
import HomePage from "../pages/HomePage"

export default function Nav() {
    return (
        <nav>
                <img src="images/Logo.svg" alt="logo"/>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="line-through">
                        <Link href="#">About</Link>
                    </li>
                    <li className="line-through">
                        <Link href="#">Menu</Link>
                    </li>
                    <li>
                        <Link to='/booking'>Reservations</Link>
                    </li>
                    <li className="line-through">
                        <Link href="#">Order Online</Link>
                    </li>
                    <li className="line-through">
                        <Link href="#">Login</Link>
                    </li>
                </ul>
            </nav>
        )
}