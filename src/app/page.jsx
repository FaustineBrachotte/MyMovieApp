import MediaCard from '@/components/MediaCard/MediaCard';
import styles from './page.module.css';
import Popular from '@/components/Popular/Popular';

export default function Home() {
	return (
		<div className={styles.main}>
			<Popular />
		</div>
	);
}
