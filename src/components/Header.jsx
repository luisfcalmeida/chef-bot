import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/" className="header">
                <img src="./images/chef-bot-icon.png"/>
                <h1>Chef Bot</h1>
            </Link>
        </header>
    )
}