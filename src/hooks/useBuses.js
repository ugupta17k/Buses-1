import { useState, useEffect } from 'react';
import { buses } from '../data/buses';

export const useBuses = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate network delay
        const timer = setTimeout(() => {
            setData(buses);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return { buses: data, loading, error };
};

export const useBus = (id) => {
    const [bus, setBus] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const found = buses.find(b => b.id === id);
            setBus(found || null);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    return { bus, loading };
};
