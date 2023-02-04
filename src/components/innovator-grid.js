import Link from "next/link";
import styles from "components/innovator-grid.module.css";

export default function InnovatorGrid({ innovators }) {
    return (
        <section className={styles.grid}>
            {innovators?.map(({ data, uid }, index) => (
                <Link key={data.name} href={`/innovators/${uid}`}>
                    <a className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={data.image.url} alt={data.name} />
                        </div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.name}>
                                {data.name}
                            </h2>
                            <p className={styles.tagline}>
                                {data.description}
                            </p>
                            {/* <p className={styles.index}>
                                {`0${index + 1}`}
                            </p> */}
                        </div>
                    </a>
                </Link>
            ))}
        </section>
    );
}
