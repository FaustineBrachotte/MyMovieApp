import styles from './Genre.module.scss';
import Link from 'next/link';
import { getMovieByPath } from '@/utils/movieClient';

const Genres = async () => {
	const { genres } = await getMovieByPath('/genre/movie/list');

	return (
		<div>
			<h2>Parcourir par genre</h2>
			<div className={styles.container}>
				{genres.map((genre) => (
					<div key={genre.id} className={styles.genre}>
						<Link href={`/movies/genres/${genre.id}`}>
							<p>{genre.name}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Genres;
