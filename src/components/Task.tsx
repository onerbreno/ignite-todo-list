import { Trash } from 'phosphor-react'

import styles from '../styles/Task.module.css'
import { Checkbox } from './Checkbox'

export function Task() {
    return (
        <div className={`${styles.task} ${styles.completed}`}>
            <Checkbox />
            <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <button className={styles.button}>
                <Trash size={18}/>
            </button>
        </div>
    )
}