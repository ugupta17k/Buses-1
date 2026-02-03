import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import InventoryCard from './InventoryCard';
import styles from './InventoryGrid.module.css';

// Mock Data Generator
const generateBuses = (count) => {
    const brands = ['TATA MOTORS', 'FORCE MOTORS', 'EICHER', 'SML ISUZU', 'ASHOK LEYLAND', 'VOLVO'];
    const locations = ['Ghaziabad', 'Delhi', 'Mumbai', 'Pune', 'Bangalore', 'Chennai'];
    const types = ['School Van', 'Staff Bus', 'Tourist Coach', 'City Bus'];
    const fuel = ['Diesel', 'CNG', 'Electric'];
    const imgs = [
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2071',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2069',
        'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=2070',
        'https://images.unsplash.com/photo-1600706432502-76b19452d3a0?auto=format&fit=crop&q=80&w=1932'
    ];

    return Array.from({ length: count }, (_, i) => {
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const price = (Math.random() * 10 + 2).toFixed(2);
        return {
            id: `inv-${i}`,
            year: 2015 + Math.floor(Math.random() * 9),
            model: `${brand} ${types[Math.floor(Math.random() * types.length)]}`,
            brand: brand,
            location: locations[Math.floor(Math.random() * locations.length)],
            price_lakhs: price,
            emi: Math.floor(price * 2500),
            image: imgs[Math.floor(Math.random() * imgs.length)],
            engine: fuel[Math.floor(Math.random() * fuel.length)],
            specs: {
                km_driven: Math.floor(Math.random() * 100000) + 10000,
                owner_type: Math.random() > 0.7 ? '1 Owner' : '2 Owners',
            },
            contactText: `${Math.floor(Math.random() * 200 + 20)} People contacted since last week`
        };
    });
};

const FilterGroup = ({ title, options, isOpen = true }) => {
    const [open, setOpen] = useState(isOpen);
    return (
        <div className={styles.filterGroup}>
            <div className={styles.filterGroupSummary} onClick={() => setOpen(!open)}>
                <span>{title}</span>
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {open && (
                <div className={styles.filterContent}>
                    {options.map((opt, i) => (
                        <label key={i} className={styles.checkboxLabel}>
                            <input type="checkbox" className={styles.checkbox} />
                            {opt.label} <span style={{ color: '#9CA3AF', fontSize: '0.8em' }}>({opt.count})</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

const InventoryGrid = () => {
    const allBuses = useMemo(() => generateBuses(50), []);
    const [visibleCount, setVisibleCount] = useState(12);

    const filters = [
        {
            title: 'Brand & Model',
            options: [
                { label: 'TATA MOTORS', count: 24 },
                { label: 'FORCE MOTORS', count: 12 },
                { label: 'EICHER', count: 8 },
                { label: 'SML ISUZU', count: 6 },
            ]
        },
        {
            title: 'Budget',
            options: [
                { label: 'Below 5 Lakh', count: 15 },
                { label: '5 Lakh - 10 Lakh', count: 20 },
                { label: 'Above 10 Lakh', count: 15 },
            ]
        },
        {
            title: 'Kilometers Driven',
            options: [
                { label: '0 - 25,000 km', count: 5 },
                { label: '25,000 - 50,000 km', count: 12 },
                { label: '50,000+ km', count: 33 },
            ]
        },
        {
            title: 'Fuel Type',
            options: [
                { label: 'Diesel', count: 40 },
                { label: 'CNG', count: 8 },
                { label: 'Electric', count: 2 },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            {/* Sidebar Filters */}
            <aside className={styles.sidebar}>
                <div className={styles.filterHeader}>Filters</div>
                {filters.map((f, i) => (
                    <FilterGroup key={i} title={f.title} options={f.options} />
                ))}
            </aside>

            {/* Main Grid */}
            <main className={styles.main}>
                <div className={styles.topBar}>
                    <select className={styles.sortSelect}>
                        <option>Sort by: Nearest First</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest First</option>
                    </select>
                </div>

                <div className={styles.grid}>
                    {allBuses.slice(0, visibleCount).map((bus) => (
                        <InventoryCard key={bus.id} bus={bus} />
                    ))}
                </div>

                {visibleCount < allBuses.length && (
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <button
                            onClick={() => setVisibleCount(c => c + 12)}
                            style={{
                                padding: '1rem 2rem',
                                border: '1px solid #E5E7EB',
                                background: 'white',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 600,
                                color: '#4B5563'
                            }}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default InventoryGrid;
