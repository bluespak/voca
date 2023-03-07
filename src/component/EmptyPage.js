import { Link } from "react-router-dom";

export default function () {
    return (
        <div>
            <h2>Wrong Page!!</h2>
            <Link to='/'>Back to home</Link>
        </div>
    );
}