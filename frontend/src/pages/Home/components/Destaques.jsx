import DestaquesCarrousel from './Destaques-carrousel';
import './Destaques.css';

// COMPONENTS



const Destaques = () => {
  return (

    <section id='principal-container-destaques'>

                <div className='container-text'>
                        <h1> Mais pedidos!</h1>
                        <span>Aproveite essas delicias</span>
                </div>

                        <div className='container-carrousel'>

                            <DestaquesCarrousel />

                        </div>


                                <div className="container-button">
                                    <button className='button-pedidos'> Saiba mais</button>
                                </div>
    </section>

  )
}

export default Destaques;
