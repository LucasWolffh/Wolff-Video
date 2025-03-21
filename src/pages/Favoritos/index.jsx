
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './favoritos.css'
import { toast } from 'react-toastify';



function Favoritos(){

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
  
    const minhaLista = localStorage.getItem('@wolffvideo');
    setFilmes(JSON.parse(minhaLista) || [])
  
  }, [])

  function excluirFilmes(id){
    let filtroFilmes = filmes.filter( (item) => {
      return( item.id !== id )
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@wolffvideo", JSON.stringify(filtroFilmes))
    toast.success('Filme removido com secusso!')
  }

  
  return(
    <div className='meus-filmes'>
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme salvo </span>}

      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilmes(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;