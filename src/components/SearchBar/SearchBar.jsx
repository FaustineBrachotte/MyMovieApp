'use client';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import SearchResults from './SearchResults/SearchResults';
import styles from './SearchBar.module.scss';

function SearchBar() {
	const [moviesResults, setMoviesResults] = useState('');
	const [hasFocus, setHasFocus] = useState(false);

	const searchMovie = async (query) => {
		const response = await fetch(`/api/movies/search?query=${query}`);
		const { results } = await response.json();

		setMoviesResults(results.filter((movie) => movie.backdrop_path));
		console.log(results);
	};
	return (
		<div className={styles.searchContainer}>
			<DebounceInput
				minLength={2}
				debounceTimeout={500}
				placeholder='Rechercher un titre'
				onChange={(e) => searchMovie(e.target.value)}
				onFocus={() => setHasFocus(true)}
				onBlur={() => setHasFocus(false)}
			/>
			{moviesResults.length > 0 && hasFocus && (
				<SearchResults moviesResults={moviesResults} />
			)}
		</div>
	);
}

export default SearchBar;
