import React from 'react';
import './About.scss';
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function About() {
    const { lang } = React.useContext(Context)
    return (
        <>
            <section className='about'>
                <div className="container">
                    <div className="about__info">
                        <div className="about__chiziq">
                            <span className='about__span'></span>
                            <span className='about__span'></span>
                            <span className='about__span'></span>
                        </div>

                        <ul className='about__list'>
                            <li className='about__item'>
                                <p className='about__number'>01</p>
                                <h2 className='about__heading'>
                                    {Language[lang].threepage.about.title1}
                                </h2>
                                <p className='about__text'>
                                    {Language[lang].threepage.about.text1}
                                </p>
                            </li>

                            <li className='about__item'>
                                <p className='about__number'>02</p>
                                <h2 className='about__heading'>
                                    {Language[lang].threepage.about.title2}
                                </h2>
                                <p className='about__text'>
                                    {Language[lang].threepage.about.text2}
                                </p>
                            </li>

                            <li className='about__item'>
                                <p className='about__number'>03</p>
                                <h2 className='about__heading'>
                                    {Language[lang].threepage.about.title3}
                                </h2>
                                <p className='about__text'>
                                    {Language[lang].threepage.about.text3}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;