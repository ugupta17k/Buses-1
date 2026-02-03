import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import DemoModal from '../modals/DemoModal';
import FloatingCTA from '../common/FloatingCTA';

const MainLayout = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBusId, setSelectedBusId] = useState(null);

    useEffect(() => {
        const handleOpenModal = (e) => {
            setSelectedBusId(e.detail?.busId || null);
            setModalOpen(true);
        };

        window.addEventListener('open-demo-modal', handleOpenModal);
        return () => window.removeEventListener('open-demo-modal', handleOpenModal);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
            <FloatingCTA />
            {modalOpen && <DemoModal busId={selectedBusId} onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default MainLayout;
