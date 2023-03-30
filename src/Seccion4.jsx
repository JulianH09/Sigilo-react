import React from 'react'

function Seccion4(props) {
  return (
    <div>
        <section class="seccion1">
            <div class="container">
                <div class="row ">
                    <h2 class="fw-bold d-flex justify-content-center pt-4" id="personajes">Personajes</h2>
                    <div class="col-12 col-lg-4 flex-column d-flex justify-content-center align-items-center mt-5">
                        <img class="img-expand rounded-circle border-3 perfil-img border-color" data-bs-toggle="modal" data-bs-target="#Gero" src={`../public/img/${props.imggero}.png`} alt=""/>
                        <button class="btn-slide btn btn-warning px-5 my-5 button-hover" data-bs-toggle="modal"
                            data-bs-target="#Gero">Gero</button>
                        <div class="modal fade" id="Gero" tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Información de Gero</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <section class="seccion1">
                                            <main class="container-modal rounded-4 bck-color">
                                                <div class="">
                                                    <div class="card-body bck-color">
                                                        <img src={`../public/img/${props.imggero2}.png`} alt="Gero"
                                                            class="rounded-4 img-sz"/>
                                                        <h5 class="d-flex justify-content-center text-white pt-4 fw-bold fs-4">{props.nombreg}</h5>
                                                        <p class="color-text fw-bold pt-1 fs-5">{props.descripg}</p>
                                                        <div class="d-flex pt-3">
                                                            <p class="color-text fw-bold pt-2 pe-1">Creación de </p>
                                                            <p class="text-white pt-2 ">{props.creadorg}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </main>
                                        </section>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center mt-5">
                        <img class="img-expand rounded-circle border-3 perfil-img border-color" data-bs-toggle="modal" data-bs-target="#Puar" src={`../public/img/${props.imgpuar}.png`}alt=""/>
                        <button class="btn-slide btn btn-warning px-5 my-5 button-hover" data-bs-toggle="modal"
                            data-bs-target="#Puar">Puar</button>
                        <div class="modal fade" id="Puar" tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Información de Puar</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <section class="seccion1">
                                            <main class="container-modal rounded-4 bck-color">
                                                <div class="">
                                                    <div class="card-body bck-color">
                                                        <img src={`../public/img/${props.imgpuar2}.png`} alt="Puar"
                                                            class="rounded-4 img-sz"/>
                                                        <h5 class="d-flex justify-content-center text-white pt-4 fw-bold fs-4">{props.nombrep}</h5>
                                                        <p class="color-text fw-bold pt-1 fs-5">{props.descripp}</p>
                                                        <div class="d-flex pt-3">
                                                            <p class="color-text fw-bold pt-2 pe-1">Creación de </p>
                                                            <p class="text-white pt-2 ">{props.creadorp}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </main>
                                        </section>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 flex-column align-items-center d-flex justify-content-center mt-5">
                        <img class="img-expand rounded-circle border-3 perfil-img border-color" data-bs-toggle="modal" data-bs-target="#Dragon"src={`../public/img/${props.imgdragon}.png`}alt=""/>
                        <button class="btn-slide btn btn-warning px-5 my-5" data-bs-toggle="modal"
                            data-bs-target="#Dragon">Drako</button>
                        <div class="modal fade" id="Dragon" tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Información de Drako</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <section class="seccion1">
                                            <main class="container-modal rounded-4 bck-color">
                                                <div class="">
                                                    <div class="card-body bck-color">
                                                        <img src={`../public/img/${props.imgdragon2}.png`} alt="Dragon"
                                                            class="rounded-4 img-sz"/>
                                                        <h5 class="d-flex justify-content-center text-white pt-4 fw-bold fs-4">{props.nombred}</h5>
                                                        <p class="color-text fw-bold pt-1 fs-5">{props.descripd}</p>
                                                        <div class="d-flex pt-3">
                                                            <p class="color-text fw-bold pt-2 pe-1">Creación de </p>
                                                            <p class="text-white pt-2 ">{props.creadord}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </main>
                                        </section>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Seccion4