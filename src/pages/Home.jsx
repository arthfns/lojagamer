import GameCard from '../components/GameCard'
import Imagemjogo from '../assets/Imagem.jpg'

const Home = () => {
  const jogos =[
    {id:1,titulo:"Jogo 1", preco: "R$ 200,00", Imagem:Imagemjogo},
    {id:2,titulo:"Jogo 2", preco: "R$ 300,00", Imagem:Imagemjogo},
    {id:3,titulo:"Jogo 3", preco: "R$ 400,00", Imagem:Imagemjogo},
    {id:4,titulo:"Jogo 4", preco: "R$ 500,00", Imagem:Imagemjogo},
  ]
  return (
    <main className="px-[5%] mt-10 grow">
      <h2 className="titulo text-3xl">jogos em Destaques</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {jogos.map((jogo)=>(
          <GameCard
          key={jogo.id}
          titulo={jogo.titulo}
          preco={jogo.preco}
          imagem={jogo.Imagem}
          />
        ))}

      </section>
      
    </main>
  )
}

export default Home
