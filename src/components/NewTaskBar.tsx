import { PlusCircle } from 'phosphor-react'

import styles from '../styles/NewTaskBar.module.css'

export function NewTaskBar() {
    return (
        <form action="#" className={styles.taskForm}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>Criar
                <PlusCircle size={16} weight='bold'/>
            </button>
        </form>
    )
}