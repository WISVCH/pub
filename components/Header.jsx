import { withRouter } from 'next/router';
import { Link } from 'react-scroll';
import styles from './Header.module.scss'

const Header = ({router}) => {
    console.log(router.pathname);
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <div class={styles.dropdown}>
                    <a href="/about">About</a>
                    <div>
                        {   router.pathname == "/about"?
                            <>    
                                <Link to="barkeepers" spy={true} smooth={true} duration={1000}>Barkeepers</Link>
                                <Link to="boards" spy={true} smooth={true} duration={1000}>Boards</Link>
                            </>
                            :
                            <>
                                <a href="/about#barkeepers">Barkeepers</a>
                                <a href="/about#boards">Boards</a>
                            </>
                        }
                    </div>
                </div>
                <a href="/events">Events</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default withRouter(Header);