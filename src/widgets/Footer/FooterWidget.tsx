'use client'
import React from 'react';
import styles from './footer.module.scss';
import Container from "@/shared/ui/Container/Container";
import {useAuth} from "@/features/auth/store/useAuth";
import Spinner from "@/shared/ui/Spinner/Spinner";

const FooterWidget = () => {

    const { user } = useAuth();
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.info}>
                    <p>
                        {user && user.email}
                    </p>
                    {new Date().getFullYear()}
                </div>
            </Container>
        </footer>
    );
};

export default FooterWidget;