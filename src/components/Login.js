import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return(
            <div className='login'>
                <h2 className='login__heading'>Вход</h2>
                <form className="form form_theme_dark">
                    <input
                        required
                        className="form__text form__text_theme_dark"
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="url"
                    />
                    <input
                        required
                        className="form__text form__text_theme_dark"
                        placeholder="Пароль"
                        id="password"
                        name="password"
                        type="password"
                    />
                    <button
                        type="submit"
                        className="form__submit-btn form__submit-btn_theme_dark"
                    >
                        Войти
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;