import { Link } from "react-router-dom";

export default function Header() {
    return (
    <div className="header">
        <h1><Link to ="/">Toeic Voca!!</Link>
        </h1>
        <div className="menu">
            <a href="#xx" className="link"> Add Word</a>
            <a href="#xx" className="link"> Add Day</a>

        </div>
    </div>
    )
}