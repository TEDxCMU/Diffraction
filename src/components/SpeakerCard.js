import styles from 'components/SpeakerCard.module.css';

export default function SpeakerCard(props) {
	const { speaker } = props;

	return (
		<div className={styles.container}>
			<img className={styles.image} src={speaker.image.url}></img>
			<div className={styles.info}>
				<text className={styles.name}>{speaker.name}</text>
				<text className={styles.title}>{speaker.title}</text>
				<text className={styles.number}>1</text>
			</div>
		</div>
	);
}