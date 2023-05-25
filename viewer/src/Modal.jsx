import { useAtom } from 'jotai'
import styles from './styles/Modal.module.css'
import { modalOpened } from './state/modal'

export function Modal() {
    const [opened, setOpened] = useAtom(modalOpened);

    return <>
        <div className={styles.modal} style={{ right: opened ? 0 : -500 }}>
            sdfsdf
        </div>

        <div
            className={styles.overlay}
            onClick={() => setOpened(false)}
            style={{
                opacity: opened ? 1 : 0,
                pointerEvents: opened ? 'auto' : 'none'
            }}
        />
    </>
}