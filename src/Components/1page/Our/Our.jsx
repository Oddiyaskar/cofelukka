import React from 'react'
import './Our.scss'
import Gran from '../../Img/1page/gran.png'
import Planalto from '../../Img/1page/planalto.png'
import Piscollo from '../../Img/1page/piscollo.png'
import Danche from '../../Img/1page/danche.png'
import Language from '../../Localization/Localization'
import { Context } from '../../Context/Localization'

function Our() {
    const {lang} = React.useContext(Context)
    return (
        <>
            <section className="our">
                <div className="container">
                    <div className="our__info">
                        <ul className="our__list">
                            <li className='our__item'>
                                <img 
                                    className='our__img' 
                                    src={Gran} 
                                    alt="Gran espresso" 
                                    width="256" 
                                    height="193"/>
                                <h2 className='our__heading'>
                                    {Language[lang].onepage.our.heading1}
                                </h2>
                                <p className='our__text'>
                                    {Language[lang].onepage.our.text1}
                                </p>
                            </li>

                            <li className='our__item'>
                                <img 
                                    className='our__img' 
                                    src={Planalto} 
                                    alt="Planalto" 
                                    width="256" 
                                    height="193"/>
                                <h2 className='our__heading'>
                                    {Language[lang].onepage.our.heading2}
                                </h2>
                                <p className='our__text'>
                                    {Language[lang].onepage.our.text2}
                                </p>
                            </li>

                            <li className='our__item'>
                                <img 
                                    className='our__img' 
                                    src={Piscollo} 
                                    alt="Piscollo" 
                                    width="256" 
                                    height="193"/>
                                <h2 className='our__heading'>
                                    {Language[lang].onepage.our.heading3}
                                </h2>
                                <p className='our__text'>
                                    {Language[lang].onepage.our.text3}
                                </p>
                            </li>

                            <li className='our__item'>
                                <img 
                                    className='our__img' 
                                    src={Danche} 
                                    alt="Danche" 
                                    width="256" 
                                    height="193"/>
                                <h2 className='our__heading'>
                                    {Language[lang].onepage.our.heading4}
                                </h2>
                                <p className='our__text'>
                                    {Language[lang].onepage.our.text4}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Our;