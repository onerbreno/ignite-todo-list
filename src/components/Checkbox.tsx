import styles from '../styles/Checkbox.module.css'

import { Check } from 'phosphor-react'

interface CheckboxProps {
    isChecked: boolean;
    onClick: () => void;
}

export function Checkbox({ isChecked, onClick }: CheckboxProps) {

    const checkboxClass = isChecked 
        ? `${styles.checkbox} ${styles.checked}` 
        : `${styles.checkbox} ${styles.default}`
    

    return (
        <div className={styles.container}>
            <button onClick={onClick}
                className={checkboxClass}
            >
                <span>
                    { isChecked && (<Check weight='bold' size={12}/>) }
                </span>
            </button>
        </div>
    )
}