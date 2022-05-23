import React from "react";

function InfoTooltip({isOpen, messageIcon, tooltipMessage, onClose}) {
    return(
        <div className={`popup ${isOpen}`}>
            <div className="popup__container">
                <img className="popup__message-icon popup__message-icon_type_unsuccessful" src={messageIcon} alt="Иконка" />
                <p className="popup__message">Вы успешно зарегистрировались!</p>
                <button className="popup__close-btn" type="button" onClick={onClose} aria-label="Закрыть" />
            </div>
        </div>
    )
}

export default InfoTooltip;