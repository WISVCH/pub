import styles from './Button.module.scss'

export const Button = ({ children, color = 'black', onClick=null, href = null, target = "_blank", active = false }) => {
    if(href) {
        return (
            <a
                href={href}
                // Note how the "error" class is accessed as a property on the imported
                // `styles` object.
                color={color}
                className={[styles.button, active?styles.active:''].join(' ')}
                target={target}
                >
                { children }
            </a>
        )
    }
    return (
        <button
            type="button"
            // Note how the "error" class is accessed as a property on the imported
            // `styles` object.
            color={color}
            className={[styles.button, active?styles.active:''].join(' ')}
            onClick={onClick}
            >
            { children }
        </button>
    )
}