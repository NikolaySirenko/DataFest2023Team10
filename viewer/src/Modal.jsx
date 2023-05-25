import { useAtom } from 'jotai'
import styles from './styles/Modal.module.css'
import { modalData, modalOpened } from './state/modal'
import { Info } from './Info';

export function Modal() {
    const [opened, setOpened] = useAtom(modalOpened);
    const [data, setData] = useAtom(modalData);

    return <>
        <div className={styles.modal} style={{ right: opened ? 0 : -600 }}>
            {data ? <Info features={data} /> : undefined}
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