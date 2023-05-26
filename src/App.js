import { useEffect, useState } from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from '../src/components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
//import SearchBar from './components/SearchBar.jsx';
//import characters, { Rick } from './data.js';

function App() {
   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(true);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "123456";

   const navigate = useNavigate();
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // const example = {
   //    id: 1,
   //    name: 'Rick Sanchez',
   //    status: 'Alive',
   //    species: 'Human',
   //    gender: 'Male',
   //    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };

   const onSearch = (id)  => {
      //setCharacters([...characters, example])
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if(!characters.some( card => card.id === data.id)){
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            } else {
               window.alert('¡Ya agregaste esta Card!');
            }
      }).catch(err => {
         window.alert('¡Esta Card no Existe!');
      })
   }

   const onRandom = () => {
      let id = Math.floor(Math.random() * 826) + 1;
      //console.log(id);
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if(!characters.some( card => card.id === data.id)){
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            } else {
               window.alert('¡Ya agregaste esta Card!');
            }
      }).catch(err => {
         window.alert('¡Esta Card no Existe!');
      })
   };

   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
   }

   const exit = () => {
      setAccess(false);
   }

   const location = useLocation();
   //console.log(location);

   return (
      <div className='App'>
         {
            location.pathname !== "/" &&
               <Nav
                  onSearch={onSearch}
                  onRandom={onRandom}
                  exit={exit}
               />
            }
            <hr className='hr' />
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
            <Routes>
               <Route path='/' element={<Form login={login} />}/>
               <Route path={"/home"} element={<Cards characters={characters} onClose = {onClose} />}/>
               <Route path={'/about'} element={ <About /> } />
               <Route path={'/detail/:id'} element={ <Detail /> } />
               <Route path={'/favorites'} element={ <Favorites /> } />
            </Routes>

         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
