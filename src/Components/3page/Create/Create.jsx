import React from 'react';
import './Create.scss'
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function Create() {
    const { lang } = React.useContext(Context)
    return (
        <>
            <section className='create'>
                <div className="container">
                    <div className="create__info">
                        <h1 className='create__heading'>
                            {Language[lang].threepage.create.heading}
                        </h1>
                        <p className='create__text'>
                            {Language[lang].threepage.create.text}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create;