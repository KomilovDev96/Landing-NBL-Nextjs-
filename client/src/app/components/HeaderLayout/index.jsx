import React from 'react'
import styles from './style.module.scss'
import Navbar from './Navbar'
export default function HeaderLayout() {
    return (
        <div>
            <nav className={styles.color}>
                <Navbar />
            </nav>
        </div>
    )
}
