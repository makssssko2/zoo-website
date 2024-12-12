import Spinner from "../../../assets/icons/Spinner/Spinner.jsx";
import styles from '../Loader.module.scss';
const LocalLoader = () => {
    return (
        <div className={styles.loader}>
            <div className={`${styles['loader__background']} ${styles['loader__background_local']}`}>
                <div className={styles['loader__spinner']}>
                    <Spinner/>
                </div>
            </div>
        </div>
    )
}

export default LocalLoader;