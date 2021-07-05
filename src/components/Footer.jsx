import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="logo_div">
                    <NavLink to="/">LOGO</NavLink>
                    <p>@2021 CODE THE WEB</p>
                </div>

                <div className="footer_menu">
                    <div className="footer_div2">
                        <h4>Products</h4>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                    </div>
                    <div className="footer_div3">
                        <h4>About</h4>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                    </div>
                    <div className="footer_div4">
                        <h4>Blogs</h4>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                    </div>
                    <div className="footer_div5">
                        <h4>Get in touch</h4>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                        <NavLink to='#'><li>Pricing</li></NavLink>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;