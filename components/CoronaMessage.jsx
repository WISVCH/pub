import styles from "./CoronaMessage.module.scss";

export const CoronaMessage = () => {
    return (
        <div className={styles.container}>
            <h1>Closed during holidays</h1>
            <p>The /Pub will be closed during the summer break! The last 'borrel' will be on Friday 24th.
            </p>
        </div>
    )
}