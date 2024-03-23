import './sidebarRow.css'

function SidebarRow(Props) {
    return (
        <>
            <div className="sidebarRow">
                <Props.Icon className="row-icon" /> 
                <h2 className="row-title" >{Props.title}</h2>
            </div>
            {/* <div className="sidebarRow-you">
                <h2 className="row-title" >{Props.title}</h2>
                <Props.Icon className="row-icon" />

            </div> */}
        </>
    )
}
export default SidebarRow;