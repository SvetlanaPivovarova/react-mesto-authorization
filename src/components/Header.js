import logoHeader from '../images/Vector_logo.svg'; // Путь к изображению внутри сборки
import React from 'react';
import { Link, Route } from "react-router-dom";

function Header({loggedIn, data, onSignOut}) {
    return(
        <header className="header page__content">
            <img className="header__logo" src={logoHeader} alt="Логотип сайта"/>

            {loggedIn?
                <ul className="header__navigation">
                    <li className="header__navigation-item">{data}</li>
                    <li className="header__navigation-item">
                        <button className="header__exit-button" onClick={onSignOut}>Выйти</button>
                    </li>
                </ul>
                :
                (<>
                    <Route path="/sign-up">
                        <Link to="/sign-up" className="header__navigation-link header__nav-reg">Регистрация</Link>
                    </Route>
                    <Route path="/sign-in">
                        <Link to="/sign-in" className="header__navigation-link">Войти</Link>
                    </Route>
                </>)
            }
        </header>
    );
}

export default Header;