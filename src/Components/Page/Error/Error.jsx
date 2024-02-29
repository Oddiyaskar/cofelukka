import './Error.scss'
import ErrorImg from '../../Img/error.png'

function Error() {
    return (
        <>
            <div className="container">
                <div className="error">
                    <img className='error__img' src={ErrorImg} alt="error" />
                </div>
            </div>
        </>
    )
}

export default Error;