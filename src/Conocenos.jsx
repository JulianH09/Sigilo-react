import React from 'react'

function Conocenos(props) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                    <img className="logo-expand img-fluid" src={`../public/img/${props.imagenmis}.png`} alt="" />
            </div>
                    <h1 className="d-flex justify-content-center fw-bold text-color mt-2">{props.mision}</h1>
                    <p className="d-flex justify-content-center text-justify">{props.misiondescrip}</p>
        </div>
    )
}

export default Conocenos