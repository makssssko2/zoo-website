import TableRow from "./TableRow/TableRow.jsx";
import './Table.scss'
const Table = ({header,items, onClick, editable}) => {

    return (
        <div className="table">
            <TableRow isHead header={header}/>
            {items.map((item, index) =>
                <TableRow
                    key={index}
                    header={header}
                    obj={item}
                    onClick={onClick}
                    editable={editable}
                />
            )}
        </div>
    )
}


export default Table;