import './Title.scss';
const Title = ({level, children, type}) => {
    return (
        <h2 className={`title title_level-${level} title_${type}`}>
            {children}
        </h2>
    )
}

export default Title;