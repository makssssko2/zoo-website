import GlobalLoader from "./components/GlobalLoader.jsx";
import LocalLoader from "./components/LocalLoader.jsx";
const Loader = ({...props}) => {
    const {
         
        type
    } = props;

    if(type === 'global'){
        return (<GlobalLoader />)
    } else if(type === 'local') {
        return (<LocalLoader />)
    }
    else return null;
}

export default Loader;

Loader.propTy