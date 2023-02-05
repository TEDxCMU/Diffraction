import styles from './index.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.eventInfo}>
          <h1 className="heading">Diffraction</h1>
          <p className="heading">Location</p>
          <p className="heading">DATE + TIME</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
