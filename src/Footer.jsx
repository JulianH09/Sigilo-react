import React from 'react'
import './Styles.css'

function Footer() {
  return (
    <div>
        <footer className="">
        <div>
            <div className="d-flex justify-content-center barra-menu pt-3">
                <div className="nav-hover">
                    <a className="footer-a" target="_blank" href="https://www.google.com/intl/es-419/gmail/about/"><h5>Sigilo777@gmail.com</h5></a>
                    <a className="footer-a" href=""><h5>Término y condiciones</h5></a>
                </div>
            </div>
            <div className="d-flex justify-content-center barra-menu py-3">
                <a href="https://www.youtube.com/watch?v=wRd89HaUXms" target="_blank"><img className="img-fluid"
                src="./img/logo-sigilo.png" width="50px" height="79px" alt=""/></a>
            </div>
            <div className="d-flex justify-content-center color-bjjj py-3">
                <a href=""><img className="px-1 img-f-expand" src="./img/facebook.png" alt=""/></a>
                <a href=""><img className="px-1 img-f-expand" src="./img/instagram.png" alt=""/></a>
                <a href=""><img className="px-1 img-f-expand" src="./img/whatsapp.png" alt=""/></a>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer