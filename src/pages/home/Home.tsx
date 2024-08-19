import "./Home.css";
import ListaPostagens from "../../componentes/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-orange-400 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem vindo ao cantinho de aventuras!</h2>
            <p className="text-xl">Escreva aqui sobre sua última viagem:</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />

              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
