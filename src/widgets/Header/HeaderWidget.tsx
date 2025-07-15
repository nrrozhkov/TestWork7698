import React from 'react';
import Link from "next/link";
import MenuWidget from "@/widgets/MenuWidget/MenuWidget";
import styles from './header.module.scss';
import {SHOP_ADDRESS, SHOP_EMAIL, SHOP_NAME, SHOP_TEL} from "@/constants/constants";
import {PAGES} from "@/config/pages.config";
import Container from "@/shared/ui/Container/Container";

const HeaderWidget = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.contacts}>
                    <div className={styles.contacts__list}>
                        <Link className={styles.contact__link} href={`tel:${SHOP_TEL}`}>
                            <span className={styles.icon}>📞</span>
                            <span className={styles.text}>{SHOP_TEL}</span>
                        </Link>
                        <Link className={styles.contact__link} href={`mailto:${SHOP_EMAIL}`}>
                            <span className={styles.icon}>✉️</span>
                            <span className={styles.text}>{SHOP_EMAIL}</span>
                        </Link>
                        <Link className={styles.contact__link} href='#'>
                            <span className={styles.icon}>📍</span>
                            <span className={styles.text}>{SHOP_ADDRESS}</span>

                        </Link>
                    </div>
                    <div className={styles.contacts__login}><Link href={PAGES.LOGIN}>Logout</Link></div>
                </div>
            </Container>
            <div className={styles.header__title}>
                <Link href={PAGES.MAIN}>
                    <h1>{SHOP_NAME}</h1>
                </Link>

            </div>
            <MenuWidget />

        </header>
    );
};

export default HeaderWidget;