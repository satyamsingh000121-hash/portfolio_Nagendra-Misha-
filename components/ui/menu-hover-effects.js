'use client';

import React from 'react';

/**
 * NavLinkHover - A single nav link with animated hover effect.
 * On hover: top & bottom borders scale in, then a dark background fills,
 * and the text turns white.
 *
 * Props:
 *  - children: link text
 *  - href: link URL (default "#")
 *  - onClick: optional click handler
 *  - className: optional extra className on the outer <a>
 */
export function NavLinkHover({ children, href = '#', onClick, className = '' }) {
  return (
    <a
      href={href}
      className={`nav-link-hover ${className}`}
      onClick={onClick}
    >
      {/* Link text */}
      <span className="nav-link-hover__text">
        {children}
      </span>
      {/* Top & bottom border animation */}
      <span className="nav-link-hover__borders" />
      {/* Background fill animation */}
      <span className="nav-link-hover__fill" />
    </a>
  );
}

/**
 * NavMenu - Full responsive navigation menu with hover animation effects.
 * This is a standalone component (the one from your prompt).
 *
 * Props:
 *  - items: array of { label, href } objects
 *  - onItemClick: optional callback when a link is clicked
 */
export default function NavMenu({ items, onItemClick }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const defaultItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const menuItems = items || defaultItems;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (item) => {
    setIsMenuOpen(false);
    if (onItemClick) onItemClick(item);
  };

  return (
    <nav className="nav-menu-container">
      {/* Mobile menu toggle button */}
      <button
        onClick={toggleMenu}
        className="nav-menu-toggle"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <div className={`nav-menu-toggle__bar ${isMenuOpen ? 'nav-menu-toggle__bar--open-1' : ''}`} />
        <div className={`nav-menu-toggle__bar ${isMenuOpen ? 'nav-menu-toggle__bar--open-2' : ''}`} />
        <div className={`nav-menu-toggle__bar ${isMenuOpen ? 'nav-menu-toggle__bar--open-3' : ''}`} />
      </button>

      {/* Menu items container */}
      <div className={`nav-menu-items ${isMenuOpen ? 'nav-menu-items--open' : ''}`}>
        <ul className="nav-menu-list">
          {menuItems.map((item) => (
            <li key={item.label} className="nav-menu-list__item">
              <NavLinkHover
                href={item.href}
                onClick={() => handleClick(item)}
              >
                {item.label}
              </NavLinkHover>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
