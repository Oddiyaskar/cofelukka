import React from "react"
import "./Country.scss"
import United from "../../Img/2page/United.svg"
import Canada from "../../Img/2page/Canada.svg"
import Australia from "../../Img/2page/Australia.svg"
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function Country() {
    const { lang } = React.useContext(Context)
    return (
        <>
            <section className="country">
                <div className="container">
                    <h4 className="country__heading">
                        {Language[lang].twopage.country.heading}
                    </h4>
                    <ul className="country__list">
                        <li className="country__item">
                            <img
                                className="country__img"
                                src={United}
                                alt="United"
                                width="41"
                                height="49" />
                            <h5 className="country__title">
                                {Language[lang].twopage.country.title1}
                            </h5>
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text1}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text2}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text3}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text4}
                            </a>
                        </li>

                        <li className="country__item">
                            <img
                                className="country__img"
                                src={Canada}
                                alt="Canada"
                                width="41"
                                height="49" />
                            <h5 className="country__title">
                                {Language[lang].twopage.country.title2}
                            </h5>
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text5}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text6}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text7}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text8}
                            </a>
                        </li>

                        <li className="country__item">
                            <img
                                className="country__img"
                                src={Australia}
                                alt="Australia"
                                width="41"
                                height="49" />
                            <h5 className="country__title">
                                {Language[lang].twopage.country.title3}
                            </h5>
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text9}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text10}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text11}
                            </a><br />
                            <a className="country__link" href="#link">
                                {Language[lang].twopage.country.text12}
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Country