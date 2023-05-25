import styles from './styles/App.module.css'
import { Map } from './Map'
import { Modal } from './Modal'

export default function App() {
	return (
		<>
			<div className={styles.title}>
				<span>DataFest 2023</span>
				<span>/</span>
				<span>Team 10</span>
			</div>

			<div className={styles.container}>
				<Modal />
				<Map />
			</div>
		</>
	)
}
