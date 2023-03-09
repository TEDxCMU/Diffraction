import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "components/navbar.module.css";
//import cn from 'classnames';

function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 812) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    return !isMobile ? (
        <>
            <nav className={styles.container}>
                <Link legacyBehavior href="/">
                    <a className={styles.link_footer}>TEDxCMU @ 2023</a>
                </Link>
                <div className={styles.links}>
                    <Link legacyBehavior href="/schedule">
                        <a className={styles.link_footer}>Instagram</a>
                    </Link>
                    <Link legacyBehavior href="/speakers">
                        <a className={styles.link_footer}>Facebook</a>
                    </Link>
                    <Link legacyBehavior href="/expo">
                        <a className={styles.link_footer}>About Us</a>
                    </Link>
                    <Link legacyBehavior href="/about">
                        <a className={styles.link_footer}>Contact Us</a>
                    </Link>
                    {/*<Link legacyBehavior href="https://www.tedxcmu.org/">

                        <a target="_blank" className={cn(styles.link, styles.btn)}>
                            Purchase Tickets
                        </a>
                        </Link>*/}
                </div>
            </nav>{" "}
        </>
    ) : (
        <nav className={styles.container}>
            <a className={styles.link}>TEDxCMU @ 2023</a>
            <div className={styles.links}>
                <div>
                    <Link legacyBehavior href="/schedule">
                        <a className={styles.link_footer}>Instagram</a>
                    </Link>
                    <Link legacyBehavior href="/speakers">
                        <a className={styles.link_footer}>Facebook</a>
                    </Link>
                </div>
                <Link legacyBehavior href="/expo">
                    <a className={styles.link_footer}>About Us</a>
                </Link>
                <Link legacyBehavior href="/about">
                    <a className={styles.link_footer}>Contact Us</a>
                </Link>
            </div>
        </nav>
    );
}

export default Footer;
