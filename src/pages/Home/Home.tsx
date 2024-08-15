import React from 'react';
import './Home.css'
import { House } from '@phosphor-icons/react';
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

function Home() {
  
  return (
    <>
    <div className="bg-indigo-900 flex justify-center">
      <div className='container grid grid-cols-2 text-white'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
          <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

          <div className="flex justify-around gap-4">
          <ModalPostagem />
          
            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
          </div>
        </div>

        <div className="flex justify-center ">
          <Link to="/home" aria-label="Ir para a página inicial">
              <House alt="Página Inicial" className='w-8' />
          </Link>
  
        </div>
      </div>
    </div>
    <ListaPostagens/>
  </>
  );
}

export default Home;