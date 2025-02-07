import "./CardProducts.css";

// eslint-disable-next-line react/prop-types
const CardProducts = ({ imgCard, title, description, price }) => {
  return (
    <div className="container-card-principal">
      <img src={imgCard} alt={title || "Imagem do produto"} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <span className="card-price">{price}</span>
      <button className="card-btn">Peça Agora</button>
    </div>
  );
};

export default CardProducts;
