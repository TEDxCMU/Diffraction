import { HomeLayout } from "components/layouts";
import styles from "./index.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.eventInfo}>
                    <h1 className="largeTitle">diffraction</h1>
                    <p className="heading medium-large">Simmons Auditorium</p>
                    <p
                        className="heading medium-large"
                        style={{ textTransform: "none" }}
                    >
                        March 25, 4 PM EST
                    </p>
                </div>
            </div>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
