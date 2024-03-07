import Image from 'next/image';
import styles from './MediaCard.module.scss';

function MediaCard() {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image
					src='https://images.unsplash.com/photo-1562350683-774f43c5bdca?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Affiche du film'
					fill
				/>
			</div>
			<div className={styles.content}>
				<h2>Dune</h2>
				<p>Le 01/03/2023</p>
			</div>
		</div>
	);
}

export default MediaCard;
