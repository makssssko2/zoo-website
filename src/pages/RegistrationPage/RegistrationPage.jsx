import {observer} from "mobx-react-lite";
import Title from "../../components/Title/Title.jsx";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import LoaderStore from "../../store/LoaderStore.js";
import AuthStore from "../../store/AuthStore.js";
import ModalStore from "../../store/ModalStore.js";
import Input from "../../components/Input/Input.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import Button from "../../components/Button/Button.jsx";
import {description, title, buyTicket} from "../../constants/text/HomePageText.js";
import {useInput} from "../../hooks/inputHooks.js";
const RegistrationPage = () => {
    const [serverResponse,setServerResponse] = useState(null);
    const navigate = useNavigate();

    const login = useInput('',{isEmpty: true,maxLength: 20});
    const password = useInput('',{isEmpty: true, minLength: 8, maxLength: 20});
    const repPassword = useInput('',{isEmpty: true, maxLength: 20, passEqual: password.value});

    const submitHandler = async (e,inputs) => {
        e.preventDefault();
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        LoaderStore.showLocalLoader();
        const res = await AuthStore.registration({login: inputs.login.value, password: inputs.password.value})
        setServerResponse(res);
        LoaderStore.hideLocalLoader();
    }

    return (
        <form
            method="POST"
            className="authTemplate__form authTemplate-form"
            onSubmit={e => submitHandler(e,{login,password,repPassword})}
        >
            <Title type={'default'} level={1}>Регистрация</Title>
            <div className="authTemplate-form__fields">
                <Input name="login" type='text' input={login}>Логин</Input>
                <Input name="pass" type='password' input={password}>Пароль</Input>
                <Input name="passRep" type='password' input={repPassword}>Повторите пароль</Input>
            </div>
            <Button type={'main'}>
                <Title type={'bright'} level={4}>Зарегистрировать</Title>
            </Button>
        </form>
    )
}

export default observer(RegistrationPage);