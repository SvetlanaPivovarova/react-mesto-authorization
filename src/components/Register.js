import React from "react";
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault()

            // сюда добавим логику обработки формы регистрации

    }
    render() {
        return(
            <div className='login'>
                <h2 className='login__heading'>Регистрация</h2>
                <form onSubmit={this.handleSubmit} className="form form_theme_dark">
                    <input
                        required
                        className="form__text form__text_theme_dark"
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="url"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        required
                        className="form__text form__text_theme_dark"
                        placeholder="Пароль"
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        className="form__submit-btn form__submit-btn_theme_dark"
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <div className="login__signin">
                    <p className="login__text">Уже зарегистрированы? </p>
                    <Link to="login" className="login__link">Войти</Link>
                </div>
            </div>
        )
    }
}

export default Register;