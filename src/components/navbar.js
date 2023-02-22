import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from 'components/navbar.module.css';
//import cn from 'classnames';

function NavBar() {

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
                    <p className={styles.logo}>TEDxCMU</p>
                </Link>
                <div className={styles.links}>
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
                    {/*<Link href="https://www.tedxcmu.org/">

                        <a target="_blank" className={cn(styles.link, styles.btn)}>
                            Purchase Tickets
                        </a>
                        </Link>*/}
                </div>
            </nav> </>)
            : (<nav className = {styles.container}> Hamburger Menu </nav>)
    )
}

export default NavBar;
