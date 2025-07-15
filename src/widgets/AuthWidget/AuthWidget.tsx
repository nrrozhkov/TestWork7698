'use client';

import { useAuth } from '@/features/auth/store/useAuth';
import {PAGES} from "@/config/pages.config";
import styles from './authWidget.module.scss'

export default function AuthWidget() {
    const { user, logout } = useAuth();

    return (
        <>
            {user ? (
                <div className={styles.userInfo}>
                    {user.firstName} {user.lastName}
                    <button onClick={logout}>
                        <span>↩</span>
                        <p className={styles.text}>Logout</p>
                    </button>
                </div>
            ) : (
                <a href={PAGES.LOGIN}>Login</a>
            )}
        </>
    );
}
