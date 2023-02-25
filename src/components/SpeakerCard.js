import styles from "components/SpeakerCard.module.css";
import { useState } from "react";
import Modal from "./modal";
import cn from "classnames";

export default function SpeakerCard(props) {
    const { speaker } = props;
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div
                className={styles.container}
                onClick={() => setOpenModal(true)}
            >
                <img className={styles.image} src={speaker.image.url}></img>
                <div className={styles.info}>
                    <text className={styles.name}>{speaker.name}</text>
                    <text className={styles.title}>{speaker.title}</text>
                    <text className={styles.number}>1</text>
                </div>
            </div>
            <Modal large active={openModal} setActive={setOpenModal}>
                <div className={styles.left}>
                    <h1 className={cn("title", styles.header)}>
                        About {speaker.name}
                    </h1>
                    <p className={styles.body}>{speaker.description}</p>
                    <div className={styles.links}>
                        <a
                            className={styles.button}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.tedxcmu.org"
                        >
                            TEDxCMU.ORG
                        </a>
                    </div>
                </div>
                <img
                    className={styles.modalImage}
                    src={speaker.image.url}
                    alt={speaker.name}
                />
            </Modal>
        </>
    );
}
