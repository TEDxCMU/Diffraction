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
                    <a className={styles.link_header}>TEDxCMU</a>
                </Link>
                <div className={styles.links}>
                    <Link href="/schedule">
                        <a className={styles.link_header}>Schedule</a>
                    </Link>
                    <Link href="/speakers">
                        <a className={styles.link_header}>Speakers</a>
                    </Link>
                    <Link href="/expo">
                        <a className={styles.link_header}>Innovation Expo</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.link_header}>About</a>
                    </Link>
                    {/*<Link href="https://www.tedxcmu.org/">

                        <a target="_blank" className={cn(styles.link, styles.btn)}>
                            Purchase Tickets
                        </a>
                        </Link>*/}
                </div>
            </nav> </>)
            : (<nav className = {styles.container}> 
            <a className={styles.link}> Hamburger </a>
                <Link href="/">
                    <a className={styles.link}>TEDxCMU</a>
                </Link>
            </nav>)
    )
}

export default NavBar;
