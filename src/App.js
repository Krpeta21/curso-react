import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link,Route } from "wouter";
export default function App() {


  return (
    
    <div className="App">
      <section className="App-content"> 
      <h1>App de gifs</h1>
      <Link to="/gif/anime">Anime</Link>
      <Link to="/gif/leagueoflegends">League of Legends</Link>
      <Link to="/gif/programming">Programacion</Link>
      <Route path="/gif/:keyword" component={ListOfGifs}/> 
      </section>
    </div>
    
  );
}
