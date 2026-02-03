import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Antigravity Bus</h3>
                    <p style={{ color: '#9CA3AF' }}>Leading the way in modern transportation solutions.</p>
                </div>
                <div className={styles.column}>
                    <h3>Inventory</h3>
                    <ul>
                        <li><a href="#">City Buses</a></li>
                        <li><a href="#">Intercity Coaches</a></li>
                        <li><a href="#">Electric Fleet</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Contact</h3>
                    <ul>
                        <li>Sales: +1 (555) 123-4567</li>
                        <li>Support: support@antigravity.bus</li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                &copy; {new Date().getFullYear()} Antigravity Bus Sales. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
