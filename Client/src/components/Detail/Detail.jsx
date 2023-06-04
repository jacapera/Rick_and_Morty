import React, { useEffect, useState } from 'react';
import styleDetail from './Detail.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Detail (props) {
  //console.log(props)

  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const urlAntigua = `https://rickandmortyapi.com/api/character/${id}`;
  const urlServerLocal = `http://localhost:3001/rickandmorty/character/${id}`

  useEffect(() => {
    axios(urlServerLocal).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
        //console.log(data)
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styleDetail.divFondo}>
      <div className={styleDetail.divPrincipal}>
        <div className={styleDetail.divInfo}>
          <h1>{character.name}</h1>
          <h2>STATUS |   {character.status}</h2>
          <h2>SPECIES | {character.species}</h2>
          <h2>GENDER | {character.gender}</h2>
          <h2>ORIGIN | {character.origin?.name}</h2>
          <h2>LOCATION | {character.location?.name}</h2>
        </div>
        <div className={styleDetail.divImg}>
          <img className={styleDetail.img} src={character.image} alt="" />
        </div>
      </div>
    </div>
  )

}