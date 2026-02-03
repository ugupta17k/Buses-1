import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <h1 className={styles.heading}>Driving the Future of Transportation</h1>
                <p className={styles.subheading}>
                    Antigravity Bus is a global leader in supplying premium new and pre-owned buses, connecting communities and businesses with reliable mobility solutions.
                </p>
            </div>

            <div className={styles.container}>
                {/* Introduction */}
                <section className={styles.section}>
                    <div className={styles.imageSection}>
                        <img
                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2069"
                            alt="Antigravity Bus Fleet"
                            className={styles.image}
                        />
                    </div>
                    <h2 className={styles.sectionTitle}>Who We Are</h2>
                    <p className={styles.text}>
                        Founded with a vision to revolutionize the bus trading industry, Antigravity Bus has grown from a local dealership to an international exporter. We specialize in sourcing, inspecting, and delivering high-quality buses for schools, tourism, public transit, and corporate fleets. Our commitment to transparency and quality has earned us the trust of clients in over 30 countries.
                    </p>
                </section>

                {/* Mission & Vision */}
                <section className={styles.section}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Our Mission</h3>
                            <p style={{ color: '#4B5563', lineHeight: 1.6 }}>
                                To provide safe, reliable, and affordable transportation solutions that empower businesses and communities to move forward. We strive to set the standard for quality assurance in the pre-owned bus market.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Our Vision</h3>
                            <p style={{ color: '#4B5563', lineHeight: 1.6 }}>
                                To be the world's most trusted partner in the bus industry, known for innovation, exceptional customer service, and a commitment to sustainable global mobility.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Our Impact</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>15+</div>
                            <div className={styles.statLabel}>Years Experience</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>1200+</div>
                            <div className={styles.statLabel}>Buses Sold</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>30+</div>
                            <div className={styles.statLabel}>Countries Served</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>Client Satisfaction</div>
                        </div>
                    </div>
                </section>

                {/* Core Values / Why Choose Us Reuse or text */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Core Values</h2>
                    <div className={styles.grid}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B3B6F', marginBottom: '0.5rem' }}>Integrity First</h3>
                            <p style={{ color: '#4B5563' }}>We believe in honest pricing and transparent vehicle conditions. What you see is what you get, with no hidden surprises.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B3B6F', marginBottom: '0.5rem' }}>Quality Obsessed</h3>
                            <p style={{ color: '#4B5563' }}>Every vehicle undergoes a rigorous 150-point inspection by our certified mechanics before it is listed for sale.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B3B6F', marginBottom: '0.5rem' }}>Customer Centric</h3>
                            <p style={{ color: '#4B5563' }}>From inquiry to delivery and after-sales support, our dedicated team is with you every step of the way.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B3B6F', marginBottom: '0.5rem' }}>Global Reach</h3>
                            <p style={{ color: '#4B5563' }}>We handle all logistics, documentation, and shipping, making international buying seamless and stress-free.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className={styles.ctaSection}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0B3B6F', marginBottom: '1rem' }}>Ready to find your next bus?</h2>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Explore our extensive inventory or contact our sales team today.</p>
                    <Link to="/inventory" className={styles.ctaBtn}>View Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
