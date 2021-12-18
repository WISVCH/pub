import styles from "./ClosedMessage.module.scss";

export const ClosedMessage = () => {
    return (
        <div className={styles.container}>
            <h1>Temporarily closed</h1>
            <p>Due to corona, the /Pub is unfortunately closed until at least the 15th of January. We hope to see you again in the new year!</p>
        </div>
    )
}