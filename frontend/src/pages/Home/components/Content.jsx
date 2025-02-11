import "./Content.css";
import img1 from "../../../assets/brownie-destaque.jpg";

const Content = () => {
  return (
    <section className="content-container-principal">
      <div className="content-container-secundario">
        <div className="content-text">
          <span> Titulo para descriminar o conteúdo</span>

          <h1>Titulo principal </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum
            reprehenderit dolor deleniti, fugit, dolorem consectetur nemo
            expedita mollitia eveniet eligendi aperiam numquam voluptatibus quo
            quis autem? Exercitationem, culpa eveniet?
          </p>

          <button>Ver mais</button>
        </div>


        <div className="content-img">
          <img src={img1} alt="dsadsa" />
        </div>
      </div>
    </section>
  );
};

export default Content;
