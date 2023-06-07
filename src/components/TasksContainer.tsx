import styles from '../styles/TasksContainer.module.css'

import taskBoard from '../assets/clipboard.png'
import { Task } from './Task'

type Task = {
    id: number;
    content: string;
    isCompleted: boolean;
}

interface TasksContainerProps {
    tasks: Task[];
    onToggleTask: (id: number) => void;
}

export function TasksContainer({ tasks, onToggleTask}: TasksContainerProps) {

    const isTasksEmpty = !tasks.length
    const totalTasks = tasks.length

    return (
        <section className={styles.tasksContainer}>
            <header className={styles.summaryTasks}>
                <div className={styles.counterTasks}>
                    <strong>Tarefas Criadas</strong>
                    <span className={styles.badge}>{totalTasks}</span>
                </div>
                <div className={styles.statusCounter}>
                    <strong>Concluídas</strong>
                    <span className={styles.badge}>2 de 5</span>
                </div>
            </header>
            <div>
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
                                    />
                              )
                            })  
                        }
                        </>
                    )

                }

                
            </div>
        </section>
    )
}