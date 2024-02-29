import React from "react"
import "./Quality.scss"
import Coffee from '../../Img/2page/Coffee.png'
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function Quality() {
    const {lang} = React.useContext(Context)
    return(
        <>
            <section className="quality">
                <div className="container">
                    <div className="quality__div">
                        <div className="quality__info">
                            <h3 className="quality__heading">
                                {Language[lang].twopage.quality.heading}
                            </h3>
                            <p className="quality__text">
                                {Language[lang].twopage.quality.text}
                            </p>
                        </div>

                        <img 
                            className="quality__img" 
                            src={Coffee} 
                            alt="Coffe" 
                            width="512" 
                            height="767"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Quality