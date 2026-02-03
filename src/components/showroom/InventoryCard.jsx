import React from 'react';
import { MapPin, Heart, Share2 } from 'lucide-react';
import styles from './InventoryCard.module.css';

const InventoryCard = ({ bus }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageArea}>
                <img src={bus.image} alt={bus.model} className={styles.image} loading="lazy" />
                <button className={styles.favBtn} aria-label="Add to favorites">
                    <Heart size={18} color="#6B7280" />
                </button>
                <div className={styles.contactBadge}>
                    {bus.contactText || "50 People contacted since last week"}
                </div>
            </div>

            <div className={styles.details}>
                <h3 className={styles.title}>{bus.year} {bus.model}</h3>
                <div className={styles.location}>
                    <MapPin size={14} />
                    {bus.location}
                </div>

                <div className={styles.specsRow}>
                    <span className={styles.specItem}>{bus.specs.km_driven} km</span>
                    <span className={styles.specItem}>{bus.specs.owner_type}</span>
                    <span className={styles.specItem}>{bus.engine}</span>
                </div>

                <div className={styles.priceRow}>
                    <div className={styles.price}>
                        ₹{bus.price_lakhs} Lakh*
                        <span className={styles.dealerTag}>Dealer</span>
                    </div>
                    <div className={styles.emi}>
                        EMI Starts @ ₹{bus.emi}/mo
                    </div>
                </div>

                <button
                    className={styles.contactBtn}
                    onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { busId: bus.id } }))}
                >
                    Contact Seller
                </button>
            </div>
        </div>
    );
};

export default InventoryCard;
