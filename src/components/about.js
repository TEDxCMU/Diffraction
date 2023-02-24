import cn from "classnames";

import styles from "./about.module.css";
import Modal from "./modal";

export default function About({ active, setActive }) {
    return (
        <Modal active={active} setActive={setActive} large>
            <div className={styles.left}>
                <h1 className={cn("title", styles.header)}>
                    About TEDxCMU: Diffraction
                </h1>
                <p className={styles.body}>
                    Diffraction is the process by which a source of light,
                    sound, or other system of waves is spread as a result of
                    passing through a narrow aperture or across an edge,
                    typically accompanied by interference between the waveforms
                    produced. TEDxCMU Diffraction represents people who are
                    willing to use their voice to influence, persuade, and
                    change others' worldview and perspective exponentially.
                    <br />
                    <br />
                    Diffraction represents interaction and dissemination of
                    ideas. It is using one voice to spread ideas to many others.
                    Diffraction keeps us open-minded and open to new
                    perspectives. We bring together a diverse set of
                    perspectives to keep us open-minded and excited to absorb
                    innovative ideas and perspectives. We realize their voice
                    can have an impact.
                </p>
            </div>
            <img
                className={styles.img}
                src="assets/about_bg.png"
                alt="a set of gradient circles showing colors being diffracted"
            />
        </Modal>
    );
}
