import React from 'react';
import { ShieldCheck, Users, Headset, Award } from 'lucide-react'; // Using Lucide icons as approximations
import styles from './ValuesSection.module.css';

const ValuesSection = () => {
    const values = [
        {
            icon: <Award size={48} strokeWidth={1.5} />,
            title: "Successful Cases",
            text: "Over the past decade, we have successfully delivered hundreds of premium buses to happy owners across the globe, establishing a reputation for reliability."
        },
        {
            icon: <ShieldCheck size={48} strokeWidth={1.5} />,
            title: "Quality Control Team",
            text: "Quality is our priority. Our professional inspection team rigorously checks every detail to ensure each bus meets our high standards before delivery."
        },
        {
            icon: <Users size={48} strokeWidth={1.5} />,
            title: "Sales Specialists",
            text: "Our dedicated sales specialists are here to guide you. We provide personalized consultation to help you find the perfect vehicle for your needs."
        },
        {
            icon: <Headset size={48} strokeWidth={1.5} />,
            title: "After-Sales Service",
            text: "We provide exceptional after-sales support to ensure your peace of mind. We are committed to your long-term satisfaction."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Choose Antigravity Bus?</h2>
                    <p className={styles.subtitle}>
                        There are many bus suppliers, but not all are created equal.
                        We provide top-level vehicles and excellent services. You won't regret choosing us!
                    </p>
                </div>

                <div className={styles.grid}>
                    {values.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
