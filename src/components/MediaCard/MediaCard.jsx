import Image from 'next/image';
import Link from 'next/link';
import styles from './MediaCard.module.scss';

function MediaCard({ media }) {
	return (
		<div className={styles.card}>
			<Link href={`/movies/${media.id}`}>
				<div className={styles.image}>
					<Image
						src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
						alt={`Affiche du film ${media.title}`}
						fill
					/>
				</div>
				<div className={styles.content}>
					<p className={styles.vote}>{media.vote_average.toFixed(1)}</p>
					<h3>{media.title}</h3>
					<p>
						Le {new Date(media.release_date).toLocaleDateString('fr-Fr')}
					</p>
				</div>
			</Link>
		</div>
	);
}

export default MediaCard;
