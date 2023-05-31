import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink, Link } from 'react-router-dom';
import styleNav from './Nav.module.css';

export default class Nav extends React.Component {
  constructor(props){
    super(props)
    //console.log(props);
  }


  render(){
    return(
      <div className={styleNav.divPrincipal}>
        <div className={styleNav.divButton} >
          <NavLink to={'/about'}>
            <button className={styleNav.button}>About</button>
          </NavLink>
          <NavLink to={'/home'}>
            <button className={styleNav.button}>Home</button>
          </NavLink>
          <Link to={'/favorites'}>
            <button className={styleNav.button} >Favorites</button>
          </Link>
        </div>
        <div className={styleNav.divSearchButton} >
          <SearchBar
            onSearch={this.props.onSearch}
            onRandom={this.props.onRandom}
          ></SearchBar>
          <button className={styleNav.buttonExit} onClick={this.props.exit}>Salir</button>
        </div>
      </div>
    )
  }
}