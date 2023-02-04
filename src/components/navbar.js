import Link from 'next/link';
import styles from 'components/navbar.module.css';
// import cn from 'classnames';

function NavBar() {
    return (
        <nav className={styles.container}>
            <Link legacyBehavior href="/">
                <p className={styles.logo}>TEDxCMU</p>
            </Link>
            <div className={styles.links}>
                <Link legacyBehavior href="/schedule">
                    <a className={styles.link}>Schedule</a>
                </Link>
                <Link legacyBehavior href="/speakers">
                    <a className={styles.link}>Speakers</a>
                </Link>
                <Link legacyBehavior href="/expo">
                    <a className={styles.link}>Innovation Expo</a>
                </Link>
                <Link legacyBehavior href="/about">
                    <a className={styles.link}>About</a>
                </Link>
                <Link legacyBehavior href="https://www.tedxcmu.org/">
                    {/* TODO: change to real link later */}
                    {/* <a target="_blank" className={cn(styles.link, styles.btn)}>
                        Purchase Tickets
                    </a> */}
                    <a target="_blank">
                        Purchase Tickets
                    </a>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
