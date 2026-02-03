import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2069"
                alt="Modern electric bus"
                className={styles.bgImage}
            />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.subheadline}>Future Mobility</div>
                    <h1 className={styles.headline}>
                        Redefining Public Transportation
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#e5e7eb' }}>
                        Experience the next generation of eco-friendly, efficient, and comfortable buses designed for the modern world.
                    </p>
                    <Link to="/inventory" className={styles.cta}>
                        Explore Fleet
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
