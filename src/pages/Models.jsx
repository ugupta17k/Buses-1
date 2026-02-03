import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';

const Models = () => {
    const modelCategories = [
        {
            id: 'city',
            title: 'City Transit Buses',
            description: 'Designed for urban mobility with high capacity and frequent stops. Features low floors for easy access and optimized standing space.',
            image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2071',
            features: ['Low-floor design', 'High passenger capacity', 'Efficient implementation', 'Wheelchair accessible']
        },
        {
            id: 'intercity',
            title: 'Intercity Coaches',
            description: 'Built for long-distance travel with maximum comfort. Includes spacious seating, luggage compartments, and onboard amenities.',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2069',
            features: ['Reclining seats', 'Onboard restroom', 'Large luggage bays', 'Climate control']
        },
        {
            id: 'tourist',
            title: 'Tourist & Luxury',
            description: 'Premium coaches for tourism and private hire. Focuses on panoramic views, luxury entertainment systems, and superior ride quality.',
            image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=2070',
            features: ['Panoramic windows', 'Premium entertainment', 'Luxury upholstery', 'Smooth air suspension']
        },
        {
            id: 'school',
            title: 'School Buses',
            description: 'Safety-first transport for students. Equipped with specialized safety features, durable interiors, and high visibility.',
            image: 'https://images.unsplash.com/photo-1600706432502-76b19452d3a0?auto=format&fit=crop&q=80&w=1932',
            features: ['Enhanced safety features', 'Durable interiors', 'GPS tracking', 'First aid kits']
        }
    ];

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <div style={{ backgroundColor: '#0B3B6F', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Our Bus Models</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.9 }}>
                    Explore our diverse range of world-class vehicles designed for every transportation need.
                    From efficient city transits to luxurious intercity coaches.
                </p>
            </div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                {modelCategories.map((cat, index) => (
                    <div key={cat.id} style={{
                        display: 'flex',
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        gap: '4rem',
                        alignItems: 'center',
                        margin: '4rem 0',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <img
                                src={cat.image}
                                alt={cat.title}
                                style={{
                                    width: '100%',
                                    borderRadius: '1rem',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    height: '400px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#111827', fontWeight: 700, marginBottom: '1rem' }}>{cat.title}</h2>
                            <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                {cat.description}
                            </p>

                            <ul style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                {cat.features.map((feat, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0B3B6F', fontWeight: 500 }}>
                                        <Info size={16} /> {feat}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/inventory"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: '#00AEEF',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: 600,
                                    textDecoration: 'none'
                                }}
                            >
                                View Inventory <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Models;
