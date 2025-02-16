import BannerAvaliacoes from "./components/Banner-avaliacoes";
import BannerPrincipal from "./components/Banner-principal";
import Content from "./components/Content";
import Destaques from "./components/Destaques"


const Home = () => {
  return (

    <>
    <BannerPrincipal />
    <Destaques />
    <Content />
    <BannerAvaliacoes />
    </>
  )
}

export default Home
