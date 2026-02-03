import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { busId: null } }))}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#00AEEF',
                color: 'white',
                border: 'none',
                borderRadius: '2rem',
                padding: '1rem 2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
            <Calendar size={20} />
            Book Demo
        </button>
    );
};

export default FloatingCTA;
