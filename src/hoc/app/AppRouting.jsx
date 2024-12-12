import {Routes, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import MainTemplate from "../../layouts/MainTemplate/MainTemplate.jsx";
import AdminTickets from "../../pages/adminPages/AdminTickets.jsx";
import AdminTemplate from "../../layouts/AdminTemplate/AdminTemplate.jsx";
import AdminEnclosures from "../../pages/adminPages/AdminEnclosures.jsx";
import AdminCheckups from "../../pages/adminPages/AdminCheckups.jsx";
import AuthTemplate from "../../layouts/AuthTemplate/AuthTemplate.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";

const AppRouting = () => {
    return (
        <Routes>
            <Route path={""} element={<MainTemplate />}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/animals" element={<HomePage />}/>
                <Route path="/gallery" element={<HomePage />}/>
                <Route path="/maps" element={<HomePage />}/>
                <Route path="/admin" element={<AdminTemplate />}>
                    <Route path="/admin/tickets" element={<AdminTickets />}/>
                    <Route path="/admin/enclosures" element={<AdminEnclosures />}/>
                    <Route path="/admin/checkups" element={<AdminCheckups />}/>
                </Route>
            </Route>
            <Route path={'/auth'} element={<AuthTemplate />}>
                <Route path="/auth/registration" element={<RegistrationPage />}/>
                <Route path="/auth/login" element={<LoginPage />}/>
            </Route>
        </Routes>
    )
}

export default AppRouting;