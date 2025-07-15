'use client';
import React from 'react'
import styles from './style.module.scss'
import Navbar from './Navbar'
import { Container } from 'styled-bootstrap-grid'
export default function HeaderLayout() {
    return (
        <header>
            <nav className={styles.color}>
                <Navbar />
            </nav>
            <div className={styles.header_bg}>
                <Container>
                    <div className={styles.header_realtive}>
                        <h1 className={styles.header_title}>
                            Честные розыгрыши <br /> на блокчейне
                        </h1>
                        <div>
                            <ul className={styles.header_list}>
                                <li>Нельзя взломать.</li>
                                <li>Нельзя подделать.</li>
                                <li>Прозрачно и безопасно.</li>
                            </ul>
                            <a href="https://t.me/nbl_registration_bot" className={styles.header_link}>
                                Играть сейчас
                            </a>
                        </div>


                    </div>

                </Container>
            </div>
        </header>
    )
}
