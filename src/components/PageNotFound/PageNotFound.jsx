import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import './pageNotFound.css'

function Error() {
    return (
        <div className="errorContainer">
            <MdError className="errorIcon" />
            <div>Oops! Page not found.</div>
            <div>404</div>
            <p>We cannot find the page you are looking for.</p>
            <Link to="/" className="button-home">Go back home</Link>
        </div>
    )
}

export default Error