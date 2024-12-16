import './Layout.scss';
const Layout = ({type, className, children}) => {
    return (
        <div className={`Layout Layout_${type === 'wide' ? 'wide' : 'thin'} ${className}`}>
            {children}
        </div>
    )
}

export default Layout;