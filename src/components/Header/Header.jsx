import { Roboto } from 'next/font/google';
import styles from './Header.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300'] });

function Header() {
	return (
		<header className={`${styles.header} ${roboto.className} `}>
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
