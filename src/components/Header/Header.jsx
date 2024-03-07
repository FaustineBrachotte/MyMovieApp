import styles from './Header.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
	return (
		<header className={styles.header}>
			<div>
				<p>My Movie App</p>
			</div>
			<div>
				<nav>
					<ul>
						<li>Films</li>
						<li>Séries</li>
					</ul>
				</nav>
			</div>
			<input type='text' placeholder='Rechercher un titre' />
			<div>
				<FontAwesomeIcon icon={faUser} />
			</div>
		</header>
	);
}

export default Header;
