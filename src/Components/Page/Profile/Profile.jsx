import React from 'react';
import './Profile.scss'
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function Profile() {
    const { lang } = React.useContext(Context)
    return (
        <>
            <div className="container">
                <div className="profile">
                    <h1 className="profile__heading">
                        {Language[lang].profile.heading}
                    </h1>
                    <input className="profile__input" type="text" placeholder='Foydalanuvchi nomi' />
                    <input className="profile__input" type="password" placeholder='Parol' />
                    <button className="profile__btn">
                        {Language[lang].profile.btn}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Profile;