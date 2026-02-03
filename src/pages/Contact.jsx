import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        country: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Mock)');
    };

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.hero}>
                <h1 className={styles.title}>Seamless Communications, Global Reach</h1>
                <p className={styles.subtitle}>
                    Contact us any time you want if you need a quote from us, or any other information you may want to know, just feel free to reach to us via any means that's convenient to you.
                </p>
            </div>

            <div className={styles.container}>
                {/* Contact Cards */}
                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Phone size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Tel</h3>
                        <p className={styles.cardContent}>+86 18937132324</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <MessageCircle size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Whatsapp</h3>
                        <p className={styles.cardContent}>+86 18937132324</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Mail size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Email</h3>
                        <p className={styles.cardContent}>inquiry@antigravitybus.com</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Add</h3>
                        <p className={styles.cardContent}>
                            Room 515, Building B, Er Qi Center,<br />
                            Shenglong Mansion, Er Qi District,<br />
                            Zhengzhou, Henan, China
                        </p>
                    </div>
                </div>

                {/* Social Media */}
                <div className={styles.socialSection}>
                    <span className={styles.socialLabel}>Follow Our Social Media</span>
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon} style={{ background: '#3b5998' }}><Facebook size={20} /></div>
                        <div className={styles.socialIcon} style={{ background: '#ff0000' }}><Youtube size={20} /></div>
                        <div className={styles.socialIcon} style={{ background: '#bd081c' }}><Instagram size={20} /></div> {/* Pinterest red usually, using Instagram icon for variety or finding Pinterest icon */}
                        <div className={styles.socialIcon} style={{ background: '#0077b5' }}><Linkedin size={20} /></div>
                        <div className={styles.socialIcon} style={{ background: '#1da1f2' }}><Twitter size={20} /></div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className={styles.formSection}>
                <div className={styles.container} style={{ maxWidth: '1000px' }}>
                    <h2 className={styles.formTitle}>Leave Us a Message</h2>
                    <p className={styles.formSubtitle}>We look forward to hearing from you and will reply within 24 hours!</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text" name="name" placeholder="Your Name"
                            className={styles.input} onChange={handleChange} value={formData.name}
                        />
                        <input
                            type="text" name="whatsapp" placeholder="WhatsApp/Wechat*"
                            className={styles.input} onChange={handleChange} value={formData.whatsapp} required
                        />
                        <input
                            type="email" name="email" placeholder="Your Email*"
                            className={styles.input} onChange={handleChange} value={formData.email} required
                        />
                        <input
                            type="text" name="country" placeholder="Your Country"
                            className={styles.input} onChange={handleChange} value={formData.country}
                        />

                        <textarea
                            name="message" rows="6" placeholder="Message*"
                            className={`${styles.textarea} ${styles.fullWidth}`}
                            onChange={handleChange} value={formData.message} required
                        ></textarea>

                        <div className={styles.fullWidth} style={{ textAlign: 'center' }}>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
