import React from 'react'
import './Styles.css'

function Header() {
  return (
    <div>
        <section className="sticky-lg-top">
        <div className="row d-flex align-items-center py-3 barra-menu ">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
                <a href=""><img src="./img/logo-sigilo.png" width="50px" height="79px" alt=""/></a>
            </div>
            <div className="col-12 col-lg-6">
                <nav className="font navbar navbar-expand-lg nav-fill">
                    <div className="container-fluid">
                        <button className="menu navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav nav-hover">
                                <a className="nav-link text-light" href="#">Sigilo</a>
                                <a className="nav-link text-light" href="#conocenos">Conócenos</a>
                                <a className="nav-link text-light" href="#personajes">Juego</a>
                                <a className="nav-link text-light" href="#" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Contacto</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </section>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5 text-warning fw-bolder" id="exampleModalLabel">Contacto</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="">
                        <div className="mb-3">
                            <label className="fw-bolder text-warning" htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombre"/>
                        </div>
                        <div className="mb-3">
                            <label className="fw-bolder text-warning" htmlFor="Apellido">Apellido</label>
                            <input type="text" className="form-control" name="apellido" id="apellido"
                                placeholder="Apellidos"/>
                        </div>
                        <div className="mb-3">
                            <label className="fw-bolder text-warning" htmlFor="correo">Correo electronico</label>
                            <input type="text" className="form-control" name="correo" id="correo"
                                placeholder="Correo electronico"/>
                        </div>
                        <div className="mb-3">
                            <label className="fw-bolder text-warning" htmlFor="mensaje">Mensaje</label>
                            <textarea type="text" className="form-control" name="mensaje" id="mensaje"
                                placeholder="Escribe aquí tu mensaje" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-warning">Enviar</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header