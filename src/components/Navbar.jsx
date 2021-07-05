import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    {/* left Side Menu  */}

                    <div className="left_side_menu">
                        <div className="logo">
                            <NavLink to="/">LOGO</NavLink>
                        </div>
                        <div className="sub_menu">
                            <NavLink to="/">
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/about">
                                <li>About</li>
                            </NavLink>
                            <NavLink to="goals">
                                <li>Goals</li>
                            </NavLink>
                            <NavLink to="tips">
                                <li>Tips</li>
                            </NavLink>
                        </div>
                    </div>
                    {/* Right Side Menu  */}
                    <div className="right_side_menu">

                    <div className="sub_menu">
                            <NavLink to="login">
                                <li>LOGIN</li>
                            </NavLink>
                            <button>SIGN UP</button>
                    </div>

                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;