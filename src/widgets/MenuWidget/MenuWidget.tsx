'use client'

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {PAGES} from "@/config/pages.config";
import styles from "./menu.module.scss";
import Container from "@/shared/ui/Container/Container";

const MenuWidget = () => {
    const pathname = usePathname()

    return (

        <nav className={styles.menu}>
            <Container>
                <Link className={pathname === PAGES.MAIN ? styles.item : ''} href={PAGES.MAIN}>Catalog</Link>
            </Container>
        </nav>
    );

};

export default MenuWidget;