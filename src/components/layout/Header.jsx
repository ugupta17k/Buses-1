import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Menu } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <Bus size={32} />
                    <span>Antigravity Bus</span>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        <li><Link to="/inventory" className={styles.navLink}>Inventory</Link></li>
                        <li><Link to="/models" className={styles.navLink}>Models</Link></li>
                        <li><Link to="/about" className={styles.navLink}>About Us</Link></li>
                        <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button
                        className={styles.ctaButton}
                        onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
                    >
                        Request Demo
                    </button>
                    <button className="md:hidden text-white" aria-label="Menu">
                        {/* Mobile menu logic to be added */}
                        <Menu size={24} color="white" className="block md:hidden" />
                        {/* Note: I'm mixing some utility classes concepts or just stick to css modules. 
                 The css module has display:none for nav on mobile. 
                 I should style the menu button in css too. 
             */}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
