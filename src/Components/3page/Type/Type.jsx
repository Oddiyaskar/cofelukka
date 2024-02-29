import React from 'react';
import './Type.scss'
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function Type() {
    const { lang } = React.useContext(Context)
    return (
        <>
            <section className='type'>
                <div className="container">
                    <ul className='type__list'>
                        <li className='type__item'>
                            <p className='type__text'>01</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span1}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__textt'>02</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span2}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__textt'>03</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span3}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__textt'>04</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span4}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__texttt'>05</p>
                            <span className='type__spann'>
                                {Language[lang].threepage.type.span5}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Type;