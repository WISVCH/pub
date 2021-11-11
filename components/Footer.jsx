import styles from './Footer.module.scss'
import {Button} from "./Button";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <address>
                    <b>Stichting /Pub</b><br />
                    Mekelweg 4<br/>
                    2628 CD, Delft<br />
                    The Netherlands<br />
                    <a href="pub-ewi@tudelft.nl">pub-ewi@tudelft.nl</a> <br/> <br/>
                    <Button color={'white'} href="/files/House_rules_Pub.pdf">House rules</Button>
                </address>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19652.780067285614!2d4.371165365242009!3d51.995989301570035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86750212847e42b5!2s%2FPUB!5e0!3m2!1sen!2snl!4v1629895179742!5m2!1sen!2snl" width="600" height="220" style={{ border: 0 + 'px'}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div>
                <b>Opening hours</b><br />
                <table>
                    <tbody>
                        <tr><th>Monday</th><td>Reservation only</td></tr>
                        <tr><th>Tuesday</th><td>Reservation only</td></tr>
                        <tr><th>Wednesday</th><td>16:00 - 22:00</td></tr>
                        <tr><th>Thursday</th><td>16:00 - 22:00</td></tr>
                        <tr><th>Friday</th><td>Reservation only</td></tr>
                        <tr><th>Saturday</th><td>Closed</td></tr>
                        <tr><th>Sunday</th><td>Closed</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}