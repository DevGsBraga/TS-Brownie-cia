import './Banner-principal.css';

//COMPONENTS
import NavBar from '../../../components/NavBar';


// ICONS react





const BannerPrincipal = () => {
  return (
    <section id="principal-container">

        <div className="navBar-container">

            <NavBar />

        </div>


        <div className="text-container">

              <span>
                    COLOCAMOS NOSSO CORAÇÃO EM CADA PEDACINHO!
              </span>

                  <h1>A Paixão pelo Brownie</h1>

                    <p>
                    Em cada brownie, colocamos todo o nosso amor e paixão. Criamos momentos especiais com ingredientes de qualidade, para que você tenha uma experiência doce e acolhedora a cada mordida
                    </p>
        </div>



    </section>
  )
}

export default BannerPrincipal
