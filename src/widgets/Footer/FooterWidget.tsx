import React from 'react';
import styles from './footer.module.scss';
import Container from "@/shared/ui/Container/Container";

const FooterWidget = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                {new Date().getFullYear()}
            </Container>
        </footer>
    );
};

export default FooterWidget;