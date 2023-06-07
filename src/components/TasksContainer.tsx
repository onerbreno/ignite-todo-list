import styles from '../styles/TasksContainer.module.css'

import taskBoard from '../assets/clipboard.png'
import { Task } from './Task'
import { TaskType } from './Task'

interface TasksContainerProps {
    tasks: TaskType[];
    onToggleTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

export function TasksContainer({ tasks, onToggleTask, onDeleteTask }: TasksContainerProps) {

    const isTasksEmpty = !tasks.length
    const totalTasks = tasks.length

    const hasTaskCompleted = tasks.some(task => task.isCompleted)
    const totalCompletedTasks = tasks.filter(task => task.isCompleted).length

    return (
        <section className={styles.tasksContainer}>
            <header className={styles.summaryTasks}>
                <div className={styles.counterTasks}>
                    <strong>Tarefas Criadas</strong>
                    <span className={styles.badge}>{totalTasks}</span>
                </div>
                <div className={styles.statusCounter}>
                    <strong>Concluídas</strong>
                    <span className={styles.badge}>{hasTaskCompleted ? `${totalCompletedTasks} de ${totalTasks}`: 0}</span>
                </div>
            </header>
            <div className={styles.tasks}>
                { isTasksEmpty ? (
                    <div className={styles.emptyTasks}>
                        <img src={taskBoard} />
                        <p>
                            <strong>
                                Você ainda não tem tarefas cadastradas
                            </strong>
                            Crie tarefas e organize seus itens a fazer
                        </p>
                    </div>
                ) : (
                    <>
                        { tasks.map(task => {
                                return (
                                    <Task
                                        key={task.id}
                                        task={task}
                                        onToggleTask={onToggleTask}
                                        onDeleteTask={onDeleteTask}
                                    />
                                )
                        }) }
                    </>
                ) }
            </div>
        </section>
    )
}