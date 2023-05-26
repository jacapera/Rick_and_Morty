import React from 'react';
import styleAbout from './About.module.css';


export default function About(props) {

  return(
    <div>
      <div className={styleAbout.divImg}></div>
      <div className={styleAbout.divPrincipal}>
        <h1>Aqui va ir información de mi perfil</h1>
      </div>
    </div>
  )
}