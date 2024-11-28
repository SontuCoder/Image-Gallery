import React from 'react';

const navItems = [
    {
        label: 'Home',
        link: '#home',
        className: 'nav-link',
    },
    {
        label: 'Collection',
        link: '#collection',
        className: 'nav-link'
    },
    {
        label: 'form',
        link: '#form',
        className: 'nav-link'
    }]

const Navber = () => {

    return (
        <nav className="navber">
            {
                navItems.map(({ label, link, className },key) => (
                    <a
                        href={link}
                        key={key} 
                        className={className} 
                    >
                        {label}
                    </a>
                ))
            }
        </nav>
    )
}

export default Navber
