import styles from './Header.module.scss';
import Link from 'next/link';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<p>
					<Link href='/'>My Movie App</Link>
				</p>
			</div>
			<div className={styles.navigation}>
				<nav>
					<ul>
						<li>
							<Link href='/movies'>Films</Link>
						</li>
						<li>
							<Link href='/series'>Séries</Link>
						</li>
					</ul>
				</nav>
			</div>
			<SearchBar />
			<div>
				<FontAwesomeIcon icon={faUser} />
			</div>
		</header>
	);
}

export default Header;
