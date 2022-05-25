import React from "react";
import InfoTooltip from "./InfoTooltip";

function Login({onLogin}) {
    const [login, setLogin] = React.useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setLogin({ ...login, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        //console.log('login', login);
        const { password, email } = login;
        if (onLogin && password && email) {
            onLogin(password, email);
        }
    }

    return(
        <>
            <InfoTooltip />
            <div className="login">
                <h2 className="login__heading">Вход</h2>
                <form className="form form_theme_dark" onSubmit={handleSubmit}>
                    <input
                        required
                        className="form__text form__text_theme_dark"
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="url"
                        value={login.email || ''}
                        onChange={handleChange}
                    />
                    <input
                        required
                        className="form__text form__text_theme_dark"
                        placeholder="Пароль"
                        id="password"
                        name="password"
                        type="password"
                        value={login.password || ''}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="form__submit-btn form__submit-btn_theme_dark"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;