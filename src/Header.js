import React from "react";
import logo from "./amebooks.png";
import background from "./checkout.png";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    return( 
    <nav className="navbar">
        <div className="header">
            <Link to="/">
            <img 
                className="header-logo" 
                src={logo} 
                alt="my logo" 
            />
            </Link>

            <div className="header-search">
                <input type="text" className="header-searchInput" />
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <Link to={!user && "/login"} className="header-link">
                    <div onClick={login} className="header-option">
                        <span className="header-optionL1">Hello, {user?.email} </span>
                        <span className="header-optionL2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionL1">Your</span>
                        <span className="header-optionL2">Books</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header-link">
                    <div className="header-basket">
                        <ShoppingBasket />
                    <span className="header-optionL2 header-basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
        </nav>
    );
}

export default Header;