import React from "react";
import { Badge } from "@mui/material"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <div className="navbar_left">
                    <span className="navbar_language">EN</span>
                    <div className="navbar_search_container">
                        <input className="navbar_input"></input>
                        <Search style={{color: "gray", fontSize: 20}}/>
                    </div>
                </div>
                <div className="navbar_center">
                    <h1 className="navbar_logo">REACT.</h1>
                </div>
                <div className="navbar_right">
                    <div className="navbar_menu_item">REGISTER</div>
                    <div className="navbar_menu_item navbar_sign_in">SIGN IN</div>
                    <div className="navbar_menu_item navbar_cart">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Navbar;