import './App.css'; // feuille de style qu'on a créé et qu'on utilise pour le composant App
import Header from './components/Header';
import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import Footer from './components/Footer';
import Button from './components/Button';
import { useState } from 'react';

function App() { // composant react (composant principale de l'application)

  const [listTodos, setListTodos] = useState([
    {
      id: 1,
      text: "Anniversaire de mariage",
      date: "27 Mai 2024",
      reminder: true
    },
    {
      id: 2,
      text: "Entrainement Morgan",
      date: "7 Juin 2024",
      reminder: false
    },
    {
      id: 3,
      text: "Anniversaire Chaima",
      date: "18 Avril 2024",
      reminder: true
    }
  ]);


  // const listTodos = useState([])[0];
  // const setListTodos = useState([])[1];

  return ( // synthaxe JSX
    <div className="container">

      <Header/>
      <AddForm/>
      <ListTodos propListTodos = {listTodos}/>
      <Button color="green" text="On"/>
      <Button color="red" text="Supprimer"/>
      <Footer/>
      
    </div>
  );
}

export default App;