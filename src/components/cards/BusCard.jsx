import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel } from 'lucide-react';
import styles from './BusCard.module.css';

const BusCard = ({ bus }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={bus.image} alt={bus.model} className={styles.image} loading="lazy" />
                {bus.badges && bus.badges.length > 0 && (
                    <div className={styles.badge}>{bus.badges[0]}</div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.type}>{bus.type}</div>
                    <h3 className={styles.title}>{bus.model}</h3>
                </div>

                <div className={styles.specs}>
                    <div className={styles.specItem}>
                        <Users size={16} />
                        <span>{bus.seats} Seats</span>
                    </div>
                    <div className={styles.specItem}>
                        <Fuel size={16} />
                        <span>{bus.engine}</span>
                    </div>
                </div>

                <div className={styles.price}>
                    From ${bus.price_from.toLocaleString()}
                </div>

                <div className={styles.actions}>
                    <Link to={`/models/${bus.id}`} className={styles.secondaryBtn}>Details</Link>
                    <button className={styles.primaryBtn} onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { busId: bus.id } }))}>
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusCard;
