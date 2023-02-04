import { useRef } from 'react';
import Menu from 'components/menu';
import Link from 'next/link';
import styles from 'components/navbar.module.css';
import cn from 'classnames';

function NavBar() {
    const parentRef = useRef(null);
    const itemsRef = useRef(null);
    return (
        <nav ref={parentRef} className={styles.container}>
            <Link href="/">
                <p className={styles.logo}>TEDxCMU</p>
            </Link>
            <div ref={itemsRef} className={styles.links}>
                <Link href="/schedule">
                    <a className={styles.link}>Schedule</a>
                </Link>
                <Link href="/speakers">
                    <a className={styles.link}>Speakers</a>
                </Link>
                <Link href="/expo">
                    <a className={styles.link}>Innovation Expo</a>
                </Link>
                <Link href="/about">
                    <a className={styles.link}>About</a>
                </Link>
                <Link href="https://www.tedxcmu.org/">
                    {/* TODO: change to real link later */}
                    <a target="_blank" className={cn(styles.link, styles.btn)}>
                        Purchase Tickets
                    </a>
                </Link>
            </div>
            <Menu parent={parentRef} items={itemsRef} />
        </nav>
    );
}

export default NavBar;
