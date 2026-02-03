import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BusCard from '../cards/BusCard';
import styles from './Showroom.module.css';
import { useBuses } from '../../hooks/useBuses';

const Showroom = () => {
    const { buses, loading } = useBuses();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 350 + 24; // Card width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const featuredBuses = buses.filter(b => b.badges && b.badges.length > 0) || buses.slice(0, 4);

    if (loading) return <div className={styles.section}><div className={styles.container}>Loading showroom...</div></div>;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Featured Models</h2>
                        <p className={styles.subtitle}>Discover our most popular and innovative buses.</p>
                    </div>
                    <div className={styles.controls}>
                        <button className={styles.controlBtn} onClick={() => scroll('left')} aria-label="Scroll left">
                            <ChevronLeft size={20} />
                        </button>
                        <button className={styles.controlBtn} onClick={() => scroll('right')} aria-label="Scroll right">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className={styles.scroller} ref={scrollRef}>
                    {featuredBuses.map(bus => (
                        <div key={bus.id} className={styles.cardWrapper}>
                            <BusCard bus={bus} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showroom;
