import styles from "./ClosedMessage.module.scss";

export const ClosedMessage = () => {
    return (
        <div className={styles.container}>
            <h1>Temporarily closed</h1>
            <p>Due to corona, the Executive Board of the TU Delft has decided all faculty bars have to close. Therefore, the /Pub is unfortunately closed until at least the 19th of December.</p>
        </div>
    )
}