import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./about.module.css";
import Modal from "./modal";

export default function About({ active, setActive }) {
    useEffect(() => {
        if (!active) {
            // router.push(curLocation);
            console.log("inactive");
        }
    }, [active]);

    return (
        <Modal active={active} setActive={setActive} large>
            <div className={styles.overlay}>
                <p>hi</p>
            </div>
        </Modal>
    );
}
