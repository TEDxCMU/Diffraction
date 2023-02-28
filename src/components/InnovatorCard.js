import styles from 'components/InnovatorCard.module.css';
export default function InnovatorCard(props) {
	const { innovator } = props;

	return (
		<div className={styles.container}>
			{/* <text className={styles.name}>{innovator.name}</text> */}
			<text className={styles.name}>{innovator.name}</text>
			<img className={styles.image} src={innovator.image.url}></img>
			<div className={styles.info}>
				<text className={styles.name}>{innovator.name}</text>
				<text className={styles.title}>{innovator.description}</text>
			</div>
		</div>
	);
}