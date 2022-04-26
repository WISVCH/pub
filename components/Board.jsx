import styles from './Board.module.scss'

export const Board = ({img, chairman, secretary, treasurer, commissioner = null, commissionerIntern = null, commissionerOfInventory, commissionerOfBarkeepers = null, commissionerOfEvents = null, commissionerOfMaintenance = null, qualitateQua}) => {
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
                        <tr><th>Chair</th><td>{chairman}</td></tr>
                        <tr><th>Secretary</th><td>{secretary}</td></tr>
                        <tr><th>Treasurer</th><td>{treasurer}</td></tr>
                        { commissioner && <tr><th>Commissioner</th><td>{commissioner}</td></tr>}
                        { commissionerIntern && <tr><th>Commissioner Intern</th><td>{commissionerIntern}</td></tr>}
                        { commissionerOfInventory && <tr><th>Commissioner of Inventory</th><td>{commissionerOfInventory}</td></tr>}
                        { commissionerOfBarkeepers && <tr><th>Commissioner of Barkeepers</th><td>{commissionerOfBarkeepers}</td></tr>}
                        { commissionerOfEvents && <tr><th>Commissioner of Events</th><td>{commissionerOfEvents}</td></tr>}
                        { commissionerOfMaintenance && <tr><th>Commissioner of Maintenance</th><td>{commissionerOfMaintenance}</td></tr>}
                        { qualitateQua && <tr><th>Qualitate Qua</th><td>{qualitateQua}</td></tr>}
                    </tbody>
                </table>
            </div>
        </section>
    )
}