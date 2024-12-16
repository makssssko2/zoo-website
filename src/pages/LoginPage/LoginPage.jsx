import {observer} from "mobx-react-lite";
import Title from "../../components/Title/Title.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import Button from "../../components/Button/Button.jsx";
import {Link} from "react-router-dom";
import {useInput} from "../../hooks/inputHooks.js";
import LoaderStore from "../../store/LoaderStore.js";
import AuthStore from "../../store/AuthStore.js";
import Input from "../../components/Input/Input.jsx";
const LoginPage = () => {

    const login = useInput('',{isEmpty: true,maxLength: 20});
    const password = useInput('',{isEmpty: true, minLength: 8, maxLength: 20});

    const submitHandler = async (e,inputs) => {
        e.preventDefault();
        let correctFlag = true;
        for(let input in inputs) {
            inputs[input].onBlur();
            correctFlag = inputs[input].correct ? correctFlag && true : false;
        }
        if(!correctFlag) return;
        LoaderStore.showLocalLoader();
        await AuthStore.login({login: inputs.login.value, password: inputs.password.value})
        LoaderStore.hideLocalLoader();
    }

    return (
        <form
            method="POST"
            className="authTemplate__form authTemplate-form"
            onSubmit={e => submitHandler(e,{login,password})}
        >
            <Title type={'default'} level={1}>Вход</Title>
            <div className="authTemplate-form__fields">
                <Input name="login" type='text' input={login}>Логин</Input>
                <Input name="pass" type='password' input={password}>Пароль</Input>
            </div>
            <Button type={'main'}>
                <Title type={'bright'} level={4}>Войти</Title>
            </Button>
            <Link to={'/auth/registration'}>
                <Paragraph type={'default'} level={5}>Зарегистрироваться</Paragraph>
            </Link>
        </form>
    )
}

export default observer(LoginPage);