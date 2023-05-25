import styles from './styles/App.module.css'

import { useState } from 'react'
import { Map } from './Map'


function App() {
	return (
		<>
			<p className={styles.title}>DataFest 2023</p>

			<div className={styles.container}>
				<Map />
			</div>
		</>
	)
}

export default App
