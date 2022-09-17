import { Badge } from "@mui/material"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <span className="navbar-language">EN</span>
                    <div className="navbar-search-container">
                        <input className="navbar-input"></input>
                        <Search style={{color: "gray", fontSize: 20}}/>
                    </div>
                </div>
                <div className="navbar-center">
                    <h1 className="navbar-logo">REACT.</h1>
                </div>
                <div className="navbar-right">
                    <div className="navbar-menu-item">REGISTER</div>
                    <div className="navbar-menu-item navbar-sign-in">SIGN IN</div>
                    <div className="navbar-menu-item navbar-cart">
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