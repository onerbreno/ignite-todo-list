import { Trash } from 'phosphor-react'

import styles from '../styles/Task.module.css'
import { Checkbox } from './Checkbox'
interface Task {
    id: number;
    content: string;
    isCompleted: boolean;
}

interface TaskProps {
    task: Task;
    onToggleTask: (id: number) => void;
}
  

export function Task({ task, onToggleTask }: TaskProps) {

    const containerClass = task.isCompleted ? `${styles.task} ${styles.completed}` : styles.task

    function handleToggleTask() {
        onToggleTask(task.id)
    }

    return (
        <div className={containerClass}>
            <Checkbox isChecked={task.isCompleted} onClick={handleToggleTask}/>
            <p>{task.content}</p>
            <button className={styles.button}>
                <Trash size={18}/>
            </button>
        </div>
    )
}