import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'


export function NewTask() {
    return (
        <form action="#" className={styles.taskForm}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>Criar
                <PlusCircle size={16} weight='bold'/>
            </button>
        </form>
    )
}