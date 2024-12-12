import styles from '../Loader.module.scss'
import Spinner from "../../../assets/icons/Spinner/Spinner.jsx";
const GlobalLoader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles['loader__background']}>
                <div className={styles['loader__spinner']}>
                    <Spinner/>
                </div>
            </div>
        </div>
    )
}

export default GlobalLoader;