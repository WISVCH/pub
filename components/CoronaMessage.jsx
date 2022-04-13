import styles from "./CoronaMessage.module.scss";

export const CoronaMessage = () => {
    return (
        <div className={styles.container}>
            <h1>Closed during holidays</h1>
            <p>The /Pub will be closed on the following days due to national holidays: April 27th, May 4th, 5th and 26th.
            </p>
        </div>
    )
}