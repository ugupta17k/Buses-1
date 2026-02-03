import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bus, Menu } from 'lucide-react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Inventory' },
        { to: '/models', label: 'Models' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
    ];

    const handleRequestDemo = () => {
        window.dispatchEvent(new CustomEvent('open-demo-modal'));
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <Bus size={32} />
                    <span>Antigravity Bus</span>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        {navLinks.map(link => (
                            <li key={link.to}>
                                <Link to={link.to} className={styles.navLink}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button
                        className={styles.ctaButton}
                        onClick={handleRequestDemo}
                    >
                        Request Demo
                    </button>
                    <button
                        className={styles.mobileMenuBtn} // We will need to ensure this class exists or allow default
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        aria-label="Menu"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        {/* Display logic for mobile only handled by CSS media queries usually, 
                             but here we rely on the icon itself primarily or parent container.
                             The previous code had md:hidden classes. Let's keep inline style simple or rely on module.
                         */}
                        <Menu size={24} color="white" className={styles.menuIcon} />
                    </button>
                </div>
            </div>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                links={navLinks}
                onRequestDemo={handleRequestDemo}
            />
        </header>
    );
};

export default Header;
