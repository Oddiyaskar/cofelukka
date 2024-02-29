import React from 'react';
import './Hero.scss'
import Language from '../../Localization/Localization';
import { Context } from "../../Context/Localization";

function Hero() {
    const {lang} = React.useContext(Context)

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__info">
                        <h1 className="hero__heading">
                            {Language[lang].onepage.hero.heading}
                        </h1>
                        <p className="hero__text">
                            {Language[lang].onepage.hero.text}
                        </p>
                        <button className='hero__btn'>
                            {Language[lang].onepage.hero.btn}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;