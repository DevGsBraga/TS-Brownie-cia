import './Destaques.css';

// COMPONENTS

import CarrouselDestaques from './Carrousel-Destaques'

const Destaques = () => {
  return (

    <section id='principal-container-destaques'>

                <div className='container-text'>
                        <h4> Mais pedidos!</h4>
                        <span>Aproveite essa delicias</span>
                </div>

                        <div className='container-carrousel'>

                            <CarrouselDestaques />

                        </div>


                                <div className="container-button">
                                    <button> Saiba mais</button>
                                </div>
    </section>

  )
}

export default Destaques;
