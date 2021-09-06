import styles from './Button.module.scss'

export const Button = ({ text, color = 'black', onClick=null, href = null, target = "_blank" }) => {
    if(href) {
        return (
            <a
                href={href}
                // Note how the "error" class is accessed as a property on the imported
                // `styles` object.
                color={color}
                className={styles.button}
                target={target}
                >
                { text }
            </a>
        )
    }
    return (
        <button
            type="button"
            // Note how the "error" class is accessed as a property on the imported
            // `styles` object.
            color={color}
            className={styles.button}
            onClick={onClick}
            >
            { text }
        </button>
    )
}