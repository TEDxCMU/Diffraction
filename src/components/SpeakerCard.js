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
                    <h1 className={styles.name}>{speaker.name}</h1>
                    <h2 className={styles.title}>{speaker.title}</h2>
                    <h2 className={styles.number}>{speaker.links[0].text}</h2>
                </div>
            </div>
            <Modal large active={openModal} setActive={setOpenModal}>
                <div className={styles.left}>
                    <h1 className={cn("title", styles.header)}>
                        About {speaker.name}
                    </h1>
                    <p className={styles.body}>{speaker.description}</p>
                </div>
                <div className={styles.right}>
                    <img
                        className={styles.modalImage}
                        src={speaker.image.url}
                        alt={speaker.name}
                    />
                </div>
            </Modal>
        </>
    );
}
