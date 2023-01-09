import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link,Route } from "wouter";
import Home from "./pages/Home";
export default function App() {


  return (
    
    <div className="App">
      <section className="App-content"> 
      <h1>App de gifs</h1>
      <Link to="/">
        <img className="App-logo" alt= 'GiffyLogo' src={require('./logo.jpg')} />
        
      </Link>
      <Route
      component={Home}
      path="/"
      ></Route>
      <Route path="/search/:keyword" component={ListOfGifs}/> 
      </section>
    </div>
    
  );
}
