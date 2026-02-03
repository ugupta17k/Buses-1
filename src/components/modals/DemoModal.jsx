import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import styles from './DemoModal.module.css';

const DemoModal = ({ busId, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        model: busId || '',
        date: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (busId) {
            setFormData(prev => ({ ...prev, model: busId }));
        }
    }, [busId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('Demo Request:', formData);
        setTimeout(() => setIsSubmitted(true), 500);
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Request a Demo</h2>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                        <X />
                    </button>
                </div>

                <div className={styles.body}>
                    {isSubmitted ? (
                        <div className={styles.success}>
                            <CheckCircle size={64} color="#10B981" style={{ margin: '0 auto 1rem' }} />
                            <h3>Request Received!</h3>
                            <p>We'll be in touch shortly to schedule your demo.</p>
                            <button className={styles.submitBtn} onClick={onClose} style={{ marginTop: '1.5rem' }}>
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="name">Full Name *</label>
                                <input
                                    type="text" id="name" name="name" required
                                    className={styles.input}
                                    value={formData.name} onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="email">Email Address *</label>
                                <input
                                    type="email" id="email" name="email" required
                                    className={styles.input}
                                    value={formData.email} onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel" id="phone" name="phone"
                                    className={styles.input}
                                    value={formData.phone} onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="model">Interested Model</label>
                                <select
                                    id="model" name="model"
                                    className={styles.select}
                                    value={formData.model} onChange={handleChange}
                                >
                                    <option value="">Select a model...</option>
                                    <option value="ytg-1234">Voyager X12</option>
                                    <option value="ytg-5678">EcoCity E10</option>
                                    <option value="ytg-9012">TourCreate Z8</option>
                                    <option value="ytg-3456">UrbanFlow 40</option>
                                    <option value="ytg-7890">ShuttlePro S</option>
                                    <option value="ytg-1122">SkyLine Double</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="date">Preferred Date</label>
                                <input
                                    type="date" id="date" name="date"
                                    className={styles.input}
                                    value={formData.date} onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="message">Message</label>
                                <textarea
                                    id="message" name="message" rows="3"
                                    className={styles.textarea}
                                    value={formData.message} onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Submit Request</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DemoModal;
