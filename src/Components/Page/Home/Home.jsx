import React from "react";
import "./Home.scss"
import Language from '../../Localization/Localization';
import { Context } from '../../Context/Localization';

function Home() {
    const { lang } = React.useContext(Context)

    return (
        <>
            <div className="container">
                <div className="home">
                    <h2 className="home__heading">
                        {Language[lang].Home}
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home;