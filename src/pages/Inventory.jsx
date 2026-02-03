import React from 'react';
import InventoryGrid from '../components/showroom/InventoryGrid';

const Inventory = () => {
    return (
        <>
            <div style={{ backgroundColor: '#0B3B6F', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Our Inventory</h1>
                <p style={{ marginTop: '1rem', opacity: 0.9 }}>Find the perfect bus for your needs.</p>
            </div>
            <InventoryGrid />
        </>
    );
};

export default Inventory;
