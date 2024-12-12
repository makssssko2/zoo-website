import Paragraph from "../../Paragraph/Paragraph.jsx";
const TableRow = ({isHead = false, obj = {}, header, editable = false, onClick}) => {
    const cells = isHead ?
        Object.values(header) :
        Object.keys(header).map((field) => obj[field]?.description || obj[field])
    ;
    return (
        <div className={`${isHead ? 'table__row table__row_head' : 'table__row'}
            ${editable ? 'table__row_editable' : ''}`}
             onClick={editable ? () => onClick(obj) : null}
        >
            {cells.map((cell) =>
                <div
                    key={cell}
                    className="table__cell"
                    style={{width: `calc(100% / ${cells.length})`}}
                >
                    <Paragraph type={isHead ? 'default-bold' : 'default'} level={4}>{cell}</Paragraph>
                </div>)
            }
        </div>
    )
}


export default TableRow;