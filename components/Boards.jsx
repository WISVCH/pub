import { useState } from 'react'
import { Board } from './Board'
import styles from './Boards.module.scss'
import { Button } from './Button'

export const Boards = () => {
    const [activeBoard, setActiveBoard] = useState(2)
    return (
        <section className={styles.container}>
            <h2>Boards</h2>
            <div className={styles.buttonWrapper}>
                {/* <Button onClick={() => setActiveBoard(3)}>Board 2</Button> */}
                <Button onClick={() => setActiveBoard(3)} active={activeBoard == 3}>Board 3</Button>
                <Button onClick={() => setActiveBoard(2)} active={activeBoard == 2}>Board 2</Button>
                <Button onClick={() => setActiveBoard(1)} active={activeBoard == 1}>Board 1</Button>
                {/* <Button onClick={() => setActiveBoard(0)} active={activeBoard == 0}>Founders</Button> */}
            </div>
            <div className={styles.boardWrapper}>
                {activeBoard == 3 && <Board name="Board 3" img={"/images/board-3.jpeg"} chairman="Shirley Li " secretary="Amanda Krudde" treasurer="Lars van Tol" commisisonerOfInventory="Simon Molenkamp" commisisonerOfEvents="Bart Zuidema" commisisonerOfMaintenance="Daan Schat " qualitateQua="Niels Mateijsen &amp; Maxim Maxurovs"/>}
                {activeBoard == 2 && <Board name="Board 2" img={"/images/board-2.jpeg"} chairman="Owen van Hooff" secretary="Maxim Maxurovs" treasurer="Niels Mateijsen" commisisonerOfInventory="Sam de Jong" commisisonerOfEvents="Joep de Jong" commisisonerOfMaintenance="Robbin Poll" qualitateQua="Frederiek Backers &amp; Joris van Breukelen"/>}
                {activeBoard == 1 && <Board name="Board 1" img={"/images/board-1.jpg"} chairman="Bastiaan Bakker" secretary="Marcel Brouwers" treasurer="Frederiek Backers" commisisonerIntern="Joris van Breukelen" commisisonerOfInventory="Rona Roovers" commisisonerOfBarkeepers="Robbin Poll" qualitateQua="Louise Zwep &amp; Joos Vrijdag"/>}
                {/* {activeBoard == 0 && <Board name="Founders" img={"/images/board-0.jpg"} chairman="Bastiaan Bakker" secretary="Marcel Brouwers" treasurer="Frederiek Backers" commisisonerIntern="Joris van Breukelen" commisisonerOfInventory="Rona Roovers" commisisonerOfBarkeepers="Robbin Poll" qualitateQua="Louise Zwep &amp; Joos Vrijdag"/>} */}
            </div>
        </section>
    )
}