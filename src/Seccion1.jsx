import React from 'react'
import './Styles.css'

function Seccion1() {
  return (
    <div>
         <section className="seccion1">
        <div className="container">
            <div className="row py-5 px-4">
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div className="contenido">
                        <h2 className="fw-bold text-center text-lg-start">¿Que es Sigilo?</h2>
                        <p className="text-justify">Sigilo es una marca la cual fue creada por tres jóvenes con el fin de
                            atacar una problemática que afecta a muchas personas en su día a día. (Esta problemática es
                            el exceso de ruido, teniendo como meta la concientización de las personas).</p>
                        <h2 className="fw-bold text-center text-lg-start">Problemática</h2>
                        <p className="text-justify ">Desde hace un tiempo hemos percibido que una problemática muy común que
                            tiene la sociedad es la alteración de la tranquilidad por exceso de ruido, esto ocasionando
                            conflictos entre la comunidad. Queremos aportar un método de aprendizaje para enseñar de
                            manera más fácil y eficaz a cumplir esta norma.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <img className="logo-expand img-fluid" src="./img/logo-sigilo.png" alt=""/>
                </div>
            </div>
        </div>
    </section>

    </div>

  )
}

export default Seccion1