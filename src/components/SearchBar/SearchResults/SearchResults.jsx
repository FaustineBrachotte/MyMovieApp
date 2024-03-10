import Image from 'next/image';
import Link from 'next/link';
import styles from './SearchResults.module.scss';

function SearchResults({ moviesResults }) {
	return (
		<div className={styles.searchResults}>
			{moviesResults.map((movie) => (
				<div key={movie.id}>
					<Link href={`/movies/${movie.id}`}>
						<Image
							width={90}
							height={50}
							src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${movie.backdrop_path}`}
							alt={`Affiche du film ${movie.title}`}
						/>
						<p>{movie.title}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default SearchResults;
