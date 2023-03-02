import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from 'components/navbar.module.css';
//import cn from 'classnames';

function Footer() {

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 812) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    
    return (
        !isMobile? 
            (<>
                <nav className={styles.container}>
                    <Link href="/">
                    <a className={styles.link_footer}>TEDxCMU @ 2023</a>
                    </Link>
                <div className={styles.links}>
                    <Link href="/schedule">
                        <a className={styles.link_footer}>Instagram</a>
                    </Link>
                    <Link href="/speakers">
                        <a className={styles.link_footer}>Facebook</a>
                    </Link>
                    <Link href="/expo">
                        <a className={styles.link_footer}>About Us</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.link_footer}>Contact Us</a>
                    </Link>
                    {/*<Link href="https://www.tedxcmu.org/">

                        <a target="_blank" className={cn(styles.link, styles.btn)}>
                            Purchase Tickets
                        </a>
                        </Link>*/}
                </div>
            </nav> </>)
            : (<nav className = {styles.container}> 
           <a className={styles.link}>TEDxCMU @ 2023</a>
            <div className={styles.links}>
                <div>
                    <Link href="/schedule">
                        <a className={styles.link_footer}>Instagram</a>
                    </Link>
                    <Link href="/speakers">
                        <a className={styles.link_footer}>Facebook</a>
                    </Link>
                </div>
                    <Link href="/expo">
                        <a className={styles.link_footer}>About Us</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.link_footer}>Contact Us</a>
                    </Link>
                </div>
            </nav>)
    )
}

export default Footer;
