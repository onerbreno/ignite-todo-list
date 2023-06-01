import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <div>
            <header className={styles.summaryTasks}>
                <div className={styles.counterTasks}>
                    <strong>Tarefas Criadas</strong>
                    <span>5</span>
                </div>
                <div className={styles.statusCounter}>
                    <strong>Concluídas</strong>
                    <span>2 de 5</span>
                </div>
            </header>
        </div>
    )
}