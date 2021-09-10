import styles from './Board.module.scss'

export const Board = ({img, chairman, secretary, treasurer, commisisonerIntern = null, commisisonerOfInventory, commisisonerOfBarkeepers = null, commisisonerOfEvents = null, commisisonerOfMaintenance = null, qualitateQua}) => {
    return (
        <section className={styles.container}>
            <div>
                <img src={img}/>
            </div>
            <div>
                <table>
                    <thead>
                        <tr><th>Position</th><th>Name</th></tr>
                    </thead>
                    <tbody>
                        <tr><th>Chairman</th><td>{chairman}</td></tr>
                        <tr><th>Secretary</th><td>{secretary}</td></tr>
                        <tr><th>Treasurer</th><td>{treasurer}</td></tr>
                        { commisisonerIntern && <tr><th>Commisisoner Intern</th><td>{commisisonerIntern}</td></tr>}
                        <tr><th>Commisisoner of Inventory</th><td>{commisisonerOfInventory}</td></tr>
                        { commisisonerOfBarkeepers && <tr><th>Commisisoner of Barkeepers</th><td>{commisisonerOfBarkeepers}</td></tr>}
                        { commisisonerOfEvents && <tr><th>Commisisoner of Events</th><td>{commisisonerOfEvents}</td></tr>}
                        { commisisonerOfMaintenance && <tr><th>Commisisoner of Maintenance</th><td>{commisisonerOfMaintenance}</td></tr>}
                        <tr><th>Qualitate Qua</th><td>{qualitateQua}</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}