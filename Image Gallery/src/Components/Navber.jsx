import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State to manage the active link
    const [activeLink, setActiveLink] = useState("#home");

    const handleNavigation = (sectionId) => {
        if (location.pathname !== "/") {
            // Navigate to the home page first if not already there
            navigate("/");
            setTimeout(() => {
                jumpToSection(sectionId);
                setActiveLink(sectionId); // Update active link after navigation
            }, 100); // Allow time for the navigation to complete
        } else {
            // Jump directly if already on the home page
            jumpToSection(sectionId);
            setActiveLink(sectionId); // Update active link immediately
        }
    };

    const jumpToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "auto" }); // No animation
        }
    };

    const navItems = [
        {
            label: "Home",
            sectionId: "#home",
            className: "nav-link",
            path: "/",
        },
        {
            label: "Collection",
            sectionId: "#collection",
            className: "nav-link",
            path: "/",
        },
        {
            label: "Form",
            sectionId: "#form-section",
            className: "nav-link",
            path: "/",
        },
    ];

    return (
        <nav className="navber">
            {navItems.map(({ label, sectionId, className, path }, key) => (
                <button
                    key={key}
                    className={`${className} ${activeLink === sectionId ? "active" : ""}`}
                    onClick={() => handleNavigation(sectionId)}
                    style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                    {label}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
