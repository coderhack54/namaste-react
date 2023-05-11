import logo from "../../logo.jpg"
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <div className="header">
            <img src={logo} alt="company-logo" />
            <ul>
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li>
                <Link to="/about">
                    About
                    </Link>
                </li>
                <li>
                <Link to="/contact">
                Contact Us
                    </Link>
                   </li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header;