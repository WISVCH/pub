import { withRouter } from 'next/router';
import { Link } from 'react-scroll';
import styles from './Header.module.scss'

const Header = ({router}) => {
    console.log(router.pathname);
    return (
        <div id="navbar" className={styles.container}>
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
                <div className={styles.dropdown}>
                    <a href="/events">Events</a>
                    <div>
                        {router.pathname == "/events" ?
                            <>
                                <Link to="reservations" spy={true} smooth={true} duration={1000}>Reservations</Link>
                                <Link to="mobitap" spy={true} smooth={true} duration={1000}>Mobitap</Link>
                            </>
                            :
                            <>
                                <a href="/events#reservations">Reservations</a>
                                <a href="/events#mobitap">Mobitap</a>
                            </>
                        }
                    </div>
                </div>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};


export default withRouter(Header);
