import { useState } from "react";
import styles from "components/InnovatorCard.module.css";
import Modal from "./modal";
import cn from "classnames";

import Filler from "../assets/filler1.svg";

export default function InnovatorCard(props) {
    const { innovator, idx } = props;
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div
                className={styles.container}
                onClick={() => setOpenModal(true)}
            >
                <img className={styles.image} src={innovator.image.url}></img>
                <div className={styles.info}>
                    <text className={styles.name}>{innovator.name}</text>
                    <text className={styles.caption}>
                        {innovator.description}
                    </text>
                    <text className={styles.index}>0{idx + 1}</text>
                </div>
            </div>
            <Modal large active={openModal} setActive={setOpenModal}>
                <div className={styles.left}>
                    <h1 className={cn("title", styles.header)}>
                        About {innovator.name}
                    </h1>
                    <p className={styles.body}>{innovator.description}</p>
                </div>
                <img
                    className={styles.modalImage}
                    src={innovator.image.url}
                    alt={innovator.name}
                />
            </Modal>
        </>
    );
}
