import './Destaques.css';

// COMPONENTS

import CarrouselDestaques from './Carrousel-Destaques'

const Destaques = () => {
  return (

    <section id='principal-container-destaques'>

                <div className='container-text'>
                        <h1> Mais pedidos!</h1>
                        <span>Aproveite essas delicias</span>
                </div>

                        <div className='container-carrousel'>

                            <CarrouselDestaques />

                        </div>


                                <div className="container-button">
                                    <button className='button-pedidos'> Saiba mais</button>
                                </div>
    </section>

  )
}

export default Destaques;
