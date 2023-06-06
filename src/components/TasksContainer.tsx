import styles from '../styles/TasksContainer.module.css'

// import taskBoard from '../assets/clipboard.png'
import { Task } from './Task'

export function TasksContainer() {
    return (
        <section className={styles.tasksContainer}>
            <header className={styles.summaryTasks}>
                <div className={styles.counterTasks}>
                    <strong>Tarefas Criadas</strong>
                    <span className={styles.badge}>5</span>
                </div>
                <div className={styles.statusCounter}>
                    <strong>Concluídas</strong>
                    <span className={styles.badge}>2 de 5</span>
                </div>
            </header>
            <div>
                {/* <div className={styles.emptyTasks}>
                    <img src={taskBoard} />
                    <p>
                        <strong>
                            Você ainda não tem tarefas cadastradas
                        </strong>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div> */}
                <Task/>
                <Task/>
            </div>
        </section>
    )
}