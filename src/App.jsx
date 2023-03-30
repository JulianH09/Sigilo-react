import './App.css'
import Header from './Header'
import Seccion1 from './Seccion1'
import Seccion2 from './Seccion2'
import Seccion3 from './Seccion3'
import Conocenos from './Conocenos'
import Seccion4 from './Seccion4'
import Footer from './Footer'

function App() {

  return (
    <div>
      <Header />
      <Seccion1/>
      <Seccion2/>

      <section className='container' id='container'>
      <div className="row">
      <Seccion3/>
      <div className="col-12 col-lg-6 d-flex justify-content-center px-5">
      <Conocenos
      imagenmis="mision"
      mision="Misión"
      misiondescrip="Desarrollar un juego web el cual tendrá como temática la enseñanza de la norma exceso de ruido, y así brindar un mejor entendimiento de esta."/>
      </div>
      <div className="col-12 col-lg-6 d-flex justify-content-center px-5">
      <Conocenos
      imagenmis="vision"
      mision="Misión"
      misiondescrip="Destacar en el mercado como una marca auténtica, educativa e innovadora."/>
      </div>
      </div>
      </section>

      <Seccion4
      imggero="perfil-gero"
      imggero2="perfil-gero"
      nombreg="Gero"
      descripg="Gero es un hombre serio, disciplinado, ambicioso y arriesgado."
      creadorg="Jose David"
      
      imgpuar="perfil-puar"
      imgpuar2="perfil-puar"
      nombrep="Puar"
      descripp="El es valiente, seguro, honesto, empático y protector."
      creadorp="Julian David"
      
      imgdragon="perfil-dragon"
      imgdragon2="perfil-dragon"
      nombred="Drako"
      descripd="Legendario Dragon nacido apartir de la muerte de un viejo matestro de artes marciales."
      creadord="Carlos Andres"/>
      <Footer/>
    </div>
  )
}

export default App
