import React from 'react';
import Hero from '../components/ui/Hero';
import Showroom from '../components/showroom/Showroom';
import ValuesSection from '../components/ui/ValuesSection';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero />
            <Showroom />
            <ValuesSection />

            <section style={{ padding: '4rem 1rem', textAlign: 'center', backgroundColor: '#F3F4F6' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', color: '#0B3B6F', marginBottom: '1rem' }}>
                        Ready to Upgrade Your Fleet?
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', marginBottom: '2rem' }}>
                        Browse our full inventory of new and certified pre-owned buses.
                    </p>
                    <Link
                        to="/inventory"
                        style={{
                            backgroundColor: '#00AEEF',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            fontWeight: 700,
                            display: 'inline-block'
                        }}
                    >
                        View All Inventory
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
