import React from 'react';
import './How.scss';
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function How() {
    const {lang} = React.useContext(Context)
    return (
        <>
            <section className='how'>
                <div className="container">
                    <h5 className='how__heading'>
                        {Language[lang].onepage.how.heading}
                    </h5>

                    <div className="how__chiziq">
                        <span className='how__span'></span>
                        <span className='how__span'></span>
                        <span className='how__span'></span>
                    </div>

                    <ul className='how__list'>
                        <li className='how__item'>
                            <p className='how__number'>01</p>
                            <h6 className='how__title'>
                                {Language[lang].onepage.how.title1}
                            </h6>
                            <p className='how__text'>
                                {Language[lang].onepage.how.text1}
                            </p>
                        </li>

                        <li className='how__item'>
                            <p className='how__number'>02</p>
                            <h6 className='how__title'>
                                {Language[lang].onepage.how.title2}
                            </h6>
                            <p className='how__text'>
                                {Language[lang].onepage.how.text2}
                            </p>
                        </li>

                        <li className='how__item'>
                            <p className='how__number'>03</p>
                            <h6 className='how__title'>
                                {Language[lang].onepage.how.title3}
                            </h6>
                            <p className='how__text'>
                                {Language[lang].onepage.how.text3}
                            </p>
                        </li>
                    </ul>

                    <button className='how__btn'>
                        {Language[lang].onepage.how.btn}
                    </button>
                </div>
            </section>
        </>
    )
}

export default How;