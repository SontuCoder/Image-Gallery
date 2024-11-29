import React, { useRef, useState, useEffect } from 'react';

const Navbar = ({navOpen}) => {
    const [activeLink, setActiveLink] = useState('#home'); 

    const lastActiveLink = useRef();

    const activeCurrentLink = (event)=>{
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;
    }

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'Collection',
            link: '#collection',
            className: 'nav-link'
        },
        {
            label: 'Form',
            link: '#form',
            className: 'nav-link'
        }
    ];

    return (
        <nav className='navber'>
            {
                navItems.map(({ label, link, className, ref },key) => (
                    <a
                        href={link}
                        key={key} 
                        className={className} 
                        onClick={activeCurrentLink} 
                        ref={ref}
                    >
                        {label}
                    </a>
                ))
            }
        </nav>
    );
};


export default Navbar;
