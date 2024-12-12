import './Layout.scss';
const Layout = ({children,...props}) => {
    const {
        type,
        className,
    } = props;

    return (
        <div className={`Layout Layout_${type === 'wide' ? 'wide' : 'thin'} ${className}`}>
            {children}
        </div>
    )
}

export default Layout;