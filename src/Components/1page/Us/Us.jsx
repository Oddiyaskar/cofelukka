import React from 'react'
import './Us.scss'
import Bean from "../../Img/1page/bean.svg"
import Prize from '../../Img/1page/prize.svg'
import Truck from "../../Img/1page/truck.svg"
import Language from '../../Localization/Localization'
import { Context } from '../../Context/Localization'

function Us() {
    const {lang} = React.useContext(Context)
    return(
        <>
            <section className='us'>
                <div className="container">
                    <div className="us__info">
                        <h3 className='us__heading'>
                            {Language[lang].onepage.us.heading}
                        </h3>
                        <p className='us__text'>
                            {Language[lang].onepage.us.text1}
                        </p>

                        <div className="us__div">
                            <ul className='us__list'>
                                <li className='us__item'>
                                    <img 
                                        className='us__img' 
                                        src={Bean} 
                                        alt="Coffee bean" 
                                        width="73" 
                                        height="72"/>
                                    <h4 className='us__title'>
                                        {Language[lang].onepage.us.title1}
                                    </h4> 
                                    <p className='us__textt'>
                                        {Language[lang].onepage.us.text2}
                                    </p>
                                </li>

                                <li className='us__item'>
                                    <img 
                                        className='us__img' 
                                        src={Prize} 
                                        alt="Prize" 
                                        width="73" 
                                        height="72"/>
                                    <h4 className='us__title'>
                                        {Language[lang].onepage.us.title2}
                                    </h4> 
                                    <p className='us__textt'>
                                        {Language[lang].onepage.us.text3}
                                    </p>
                                </li>

                                <li className='us__item'>
                                    <img 
                                        className='us__img' 
                                        src={Truck} 
                                        alt="Truck" 
                                        width="73" 
                                        height="72"/>
                                    <h4 className='us__title'>
                                        {Language[lang].onepage.us.title3}
                                    </h4> 
                                    <p className='us__textt'>
                                        {Language[lang].onepage.us.text4}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Us;