import {Navigate, Outlet, useNavigate} from "react-router-dom";
import './AuthTemplate.scss';
import Layout from "../Layout/Layout.jsx";
import {useEffect} from "react";
import AuthStore from "../../store/AuthStore.js";
import LoaderStore from "../../store/LoaderStore.js";
const AuthTemplate = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(AuthStore.isAuth);
        if(AuthStore.isAuth) {
            LoaderStore.showGlobalLoader();
            navigate('/');
            LoaderStore.hideGlobalLoader();
        }
    }, [AuthStore.isAuth])

    return AuthStore.isAuth ?
        (<Navigate to={'/'}/>) :
        (<div className="authTemplate">
            <Layout type='thin' className='authTemplate__container'>
                <div className="authTemplate__content">
                    <Outlet />
                </div>
            </Layout>
        </div>)

}


export default AuthTemplate;