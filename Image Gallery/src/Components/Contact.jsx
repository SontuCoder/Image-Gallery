import React from 'react';

const socialLinks = [
    {
        href: "https://www.instagram.com/subha_dip002/",
        iconClass: "fi fi-brands-instagram",
        alt: "Instagram"
    },
    {
        href: "https://www.instagram.com/subha_dip002/",
        iconClass: "fi fi-rs-user",
        alt: "User Profile"
    }
];

const Contact = () => {
    return (
        <nav className="contact">
            {socialLinks.map(({ href, iconClass, alt }, index) => (
                <a 
                    href={href} 
                    key={index} 
                    aria-label={alt} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <i className={iconClass}></i>
                </a>
            ))}
        </nav>
    );
};

export default Contact;
