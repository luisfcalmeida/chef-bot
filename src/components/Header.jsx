import { SiCodechef } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/" className="header">
                <SiCodechef/>
                <h1>Chef Bot</h1>
            </Link>
        </header>
    )
}