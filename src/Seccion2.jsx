import React from 'react'
import './Styles.css'

function Seccion2() {
  return (
    <div>
         <section className="seccion-2">
            <div className="container">
                <div className="row px-5 py-5">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <img className="logo-expand img-fluid" src="./img/sobre-nosotros.png" alt=""/>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="">
                            <h2 className="fw-bold text-center text-lg-start pt-2">Sobre nosotros</h2>
                            <p className=" text-justify">Sigilo fue la idea de los tres miembros fundadores para
                                concientizar a las personas de una manera menos tediosa y más divertida, por medio de la
                                creación de un juego web esperamos cumplir este objetivo y poder ayudar a reducir la
                                problemática.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Seccion2