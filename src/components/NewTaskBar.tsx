import { PlusCircle } from 'phosphor-react'

import styles from '../styles/NewTaskBar.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface NewTaskBarProps {
    onCreateTask: (task: string) => void;
}

export function NewTaskBar({ onCreateTask }: NewTaskBarProps) {
    const [task, setTask] = useState('')
    
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setTask(event.target.value)
    }
    
    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        onCreateTask(task)
        setTask('')
    }

    const isNewTaskEmpty = task.length === 0

    return (
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
            <input onChange={handleNewTaskChange} type="text" value={task} placeholder='Adicione uma nova tarefa'/>
            <button disabled={isNewTaskEmpty}>
                Criar
                <PlusCircle size={16} weight='bold'/>
            </button>
        </form>
    )
}