import React from 'react';
import './Do.scss'
import Path from '../../Img/3page/Path.svg'
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function Do() {
    const { lang } = React.useContext(Context)
    return (
        <>
            <section className='do'>
                <div className="container">
                    <div className="do__div">
                        <div className="do__info">
                            <h3 className='do__heading'>
                                {Language[lang].threepage.do.heading1}
                            </h3>
                            <img 
                                className='do__icon' 
                                src={Path} 
                                alt="Path" 
                                width="19" 
                                height="13"/>
                        </div>

                        <ul className='do__list'>
                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title1}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text1}
                                </p>
                            </li>

                            <li className='do__li'>
                                <h4 className='do__titlle'>
                                    {Language[lang].threepage.do.title2}
                                </h4>
                                <p className='do__textt'>
                                    {Language[lang].threepage.do.text2}
                                </p>
                            </li>

                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title3}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text3}
                                </p>
                            </li>
                        </ul>

                        <div className="do__info">
                            <h3 className='do__heading'>
                                {Language[lang].threepage.do.heading2}
                            </h3>
                            <img 
                                className='do__icon' 
                                src={Path} 
                                alt="Path" 
                                width="19" 
                                height="13"/>
                        </div>

                        <ul className='do__list'>
                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title4}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text4}
                                </p>
                            </li>

                            <li className='do__li'>
                                <h4 className='do__titlle'>
                                    {Language[lang].threepage.do.title5}
                                </h4>
                                <p className='do__textt'>
                                    {Language[lang].threepage.do.text5}
                                </p>
                            </li>

                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title6}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text6}
                                </p>
                            </li>
                        </ul>

                        <div className="do__info">
                            <h3 className='do__heading'>
                                {Language[lang].threepage.do.heading3}
                            </h3>
                            <img 
                                className='do__icon' 
                                src={Path} 
                                alt="Path" 
                                width="19" 
                                height="13"/>
                        </div>

                        <ul className='do__list'>
                            <li className='do__li'>
                                <h4 className='do__titlle'>
                                    {Language[lang].threepage.do.title7}
                                </h4>
                                <p className='do__textt'>
                                    {Language[lang].threepage.do.text7}
                                </p>
                            </li>

                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title8}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text8}
                                </p>
                            </li>

                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title9}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text9}
                                </p>
                            </li>
                        </ul>

                        <div className="do__info">
                            <h3 className='do__heading'>
                                {Language[lang].threepage.do.heading4}
                            </h3>
                            <img 
                                className='do__icon' 
                                src={Path} 
                                alt="Path" 
                                width="19" 
                                height="13"/>
                        </div>

                        <ul className='do__list'>
                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title10}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text10}
                                </p>
                            </li>

                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title11}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text11}
                                </p>
                            </li>

                            <li className='do__li'>
                                <h4 className='do__titlle'>
                                    {Language[lang].threepage.do.title12}
                                </h4>
                                <p className='do__textt'>
                                    {Language[lang].threepage.do.text12}
                                </p>
                            </li>
                        </ul>

                        <div className="do__info">
                            <h3 className='do__heading'>
                                {Language[lang].threepage.do.heading5}
                            </h3>
                            <img 
                                className='do__icon' 
                                src={Path} 
                                alt="Path" 
                                width="19" 
                                height="13"/>
                        </div>

                        <ul className='do__list'>
                            <li className='do__li'>
                                <h4 className='do__titlle'>
                                    {Language[lang].threepage.do.title13}
                                </h4>
                                <p className='do__textt'>
                                    {Language[lang].threepage.do.text13}
                                </p>
                            </li>

                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title14}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text14}
                                </p>
                            </li>

                            <li className='do__item'>
                                <h4 className='do__title'>
                                    {Language[lang].threepage.do.title15}
                                </h4>
                                <p className='do__text'>
                                    {Language[lang].threepage.do.text15}
                                </p>
                            </li>
                        </ul>

                        <div className="do__end">
                            <p className='do__p'>
                                {Language[lang].threepage.do.text16}
                            </p>
                            <h5 className='do__headline'>
                                {Language[lang].threepage.do.title16}
                            </h5>
                        </div>

                        <button className='do__btn'>
                            {Language[lang].threepage.do.btn}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Do;