import styles from '../styles/Checkbox.module.css'

import { Check } from 'phosphor-react'

export function Checkbox() {
    return (
        <div className={styles.container}>
            <button 
                className={`${styles.checkbox} ${styles.checked}`}
            >
                <span>
                    <Check weight='bold' size={12}/>
                </span>
            </button>
        </div>
    )
}