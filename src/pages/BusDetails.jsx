import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBus } from '../hooks/useBuses';
import { ArrowLeft, Check, Download, Share2 } from 'lucide-react';

const BusDetails = () => {
    const { id } = useParams();
    const { bus, loading } = useBus(id);

    if (loading) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading details...</div>;
    if (!bus) return <div style={{ padding: '4rem', textAlign: 'center' }}>Bus not found. <Link to="/inventory">Back to Inventory</Link></div>;

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <div style={{ height: '400px', overflow: 'hidden', position: 'relative', backgroundColor: '#111827' }}>
                <img src={bus.image} alt={bus.model} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                <div style={{ position: 'absolute', bottom: '2rem', left: '0', right: '0' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                        <span style={{ color: '#00AEEF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{bus.type}</span>
                        <h1 style={{ color: 'white', fontSize: '3rem', margin: '0.5rem 0' }}>{bus.model}</h1>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem', display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem' }}>

                {/* Main Content */}
                <div>
                    <Link to="/inventory" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', textDecoration: 'none', marginBottom: '2rem', fontWeight: 500 }}>
                        <ArrowLeft size={16} /> Back to Inventory
                    </Link>

                    <h2 style={{ fontSize: '1.5rem', color: '#0B3B6F', marginBottom: '1rem' }}>Overview</h2>
                    <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#4B5563', marginBottom: '2rem' }}>
                        {bus.description}
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: '#0B3B6F', marginBottom: '1rem' }}>Specifications</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem', overflow: 'hidden' }}>
                        <div style={{ padding: '1rem', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>Engine</div>
                        <div style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{bus.engine}</div>

                        <div style={{ padding: '1rem', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>Seats</div>
                        <div style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{bus.seats}</div>

                        <div style={{ padding: '1rem', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>Length</div>
                        <div style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{bus.length_m} meters</div>

                        <div style={{ padding: '1rem', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>Power</div>
                        <div style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{bus.specs.power}</div>

                        <div style={{ padding: '1rem', backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>Range</div>
                        <div style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>{bus.specs.range_km} km</div>
                    </div>
                </div>

                {/* Sidebar */}
                <div>
                    <div style={{ position: 'sticky', top: '100px', backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB' }}>
                        <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>Starting from</div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B3B6F', marginBottom: '2rem' }}>
                            ${bus.price_from.toLocaleString()}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { busId: bus.id } }))}
                                style={{ padding: '1rem', backgroundColor: '#00AEEF', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}
                            >
                                Request Live Demo
                            </button>
                            <button style={{ padding: '1rem', backgroundColor: 'white', color: '#111827', border: '1px solid #E5E7EB', borderRadius: '0.5rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <Download size={20} /> Download Brochure
                            </button>
                        </div>

                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E5E7EB' }}>
                            <h4 style={{ marginBottom: '1rem', color: '#111827' }}>Why this model?</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {bus.badges.map(badge => (
                                    <li key={badge} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#4B5563' }}>
                                        <Check size={16} color="#10B981" /> {badge}
                                    </li>
                                ))}
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#4B5563' }}>
                                    <Check size={16} color="#10B981" /> 5 Year Warranty
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusDetails;
