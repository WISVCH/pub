import styles from "./ClosedMessage.module.scss";

export const ClosedMessage = () => {
    return (
        <div className={styles.container}>
            <h1>Temporarily closed</h1>
            <p>Due to corona, the /Pub is unfortunately closed until at least the 25th of January. We hope to see you again soon in the /Pub!</p>
        </div>
    )
}