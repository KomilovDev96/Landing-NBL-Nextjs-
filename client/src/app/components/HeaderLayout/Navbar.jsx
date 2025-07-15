'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'styled-bootstrap-grid';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <Container>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/logo.png" alt="NBL Logo" width={100} height={40} priority />
                        </Link>
                    </div>
                    <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                        <a href="#how">Как играть?</a>
                        <a href="#winners">Победители</a>
                        <a href="#ref">Рефералы</a>
                        <a href="#faq">FAQ</a>
                    </nav>

                    <div className={styles.burger} onClick={toggleMenu}>
                        <span className={`${styles.line} ${menuOpen ? styles.rotate1 : ''}`} />
                        <span className={`${styles.line} ${menuOpen ? styles.fadeOut : ''}`} />
                        <span className={`${styles.line} ${menuOpen ? styles.rotate2 : ''}`} />
                    </div>
                </div>
            </div >
        </Container>

    );
};

export default Navbar;
