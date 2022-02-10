import styles from "./CoronaMessage.module.scss";

export const CoronaMessage = () => {
    return (
        <div className={styles.container}>
            <h1>We are open again!</h1>
            <p>We are very excited to announce that we will be open again from February 9th! However, due to corona, everyone has to stay seated and keep 1,5m distance.
            There also is a maximum capacity of 65 people and masks are mandatory when walking. Can't wait to see you all again in the /Pub!
            </p>
        </div>
    )
}