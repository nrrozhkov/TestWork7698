import React from 'react';
import LoginForm from "@/features/auth/ui/LoginForm";
import Container from "@/shared/ui/Container/Container";
import styles from './login.module.scss'

const Page = () => {
    return (
        <Container>
            <h1 className={styles.title}>Login form</h1>
            <LoginForm />
        </Container>
    );
};

export default Page;