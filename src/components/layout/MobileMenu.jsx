import React from 'react';
import { Link } from 'react-router-dom';
import { X, Bus, ChevronRight, Phone } from 'lucide-react'; // Added icons
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose, links, onRequestDemo }) => {
    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const overlayVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 50 },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        })
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariants}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1001,
                            backdropFilter: 'blur(2px)'
                        }}
                    />

                    {/* Menu Drawer */}
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '300px', // slightly wider
                            maxWidth: '80%',
                            backgroundColor: '#ffffff',
                            zIndex: 1002,
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '-4px 0 15px rgba(0,0,0,0.1)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0B3B6F', fontWeight: '800' }}>
                                <Bus size={28} />
                                <span style={{ fontSize: '1.25rem' }}>Antigravity</span>
                            </div>
                            <button
                                onClick={onClose}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#6B7280',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%', // Circular touch target
                                    backgroundColor: '#F3F4F6'
                                }}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Links */}
                        <nav style={{ flex: 1 }}>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {links.map((link, i) => (
                                    <motion.li
                                        key={link.to}
                                        custom={i}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            to={link.to}
                                            onClick={onClose}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#1F2937',
                                                fontSize: '1.2rem',
                                                fontWeight: 600,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '0.5rem 0',
                                                borderBottom: '1px solid #F3F4F6' // subtle separator
                                            }}
                                        >
                                            {link.label}
                                            <ChevronRight size={18} color="#9CA3AF" />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* Footer Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <button
                                onClick={() => {
                                    onRequestDemo();
                                    onClose();
                                }}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: '#00AEEF',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 174, 239, 0.4)' // colorful shadow
                                }}
                            >
                                Request Demo
                            </button>

                            <a href="tel:+8618937132324" style={{
                                textAlign: 'center',
                                color: '#6B7280',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem'
                            }}>
                                <Phone size={16} /> Need help? Call us
                            </a>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
