'use client';

import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/store/useAuth';
import styles from './login-form.module.scss';
import {PAGES} from "@/config/pages.config";
import Spinner from "@/shared/ui/Spinner/Spinner";

export default function LoginForm() {
    const router = useRouter();
    const {user} = useAuth();
    const setUser = useAuth((state) => state.setUser);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (username.length < 3 || password.length < 3) {
            setError('Username and password must be at least 3 characters');
            return;
        }

        setLoading(true);
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });


        if (res.ok) {
            const data = await res.json();
            setUser(data.user)
            router.push(PAGES.MAIN);
        } else {
            const data = await res.json();
            setError(data.message || 'Login failed');
        }

        setLoading(false);

    };

    useEffect(() => {
        if (user) {
            router.push(PAGES.MAIN);
        }
    }, [user]);


    return (
        <form onSubmit={handleLogin} className={styles.form}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? <Spinner /> : 'Login'}
            </button>
        </form>
    );
}
