import todoListLogo from '../assets/todo-list-logo.svg';
import styles from '../styles/Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoListLogo} alt="Logotipo do Todo List" />
        </header>
    )
}