import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "../../index.css"
const POPULAR_GIFS = ["anime", "pizza", "Tacos"];

export default function Home(){
    const [keyword,setKeyword] = useState('');
    const [path,pushLocation] = useLocation()
    console.log(path)
    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/:${keyword}`)
        
    }
    const handleChange = evt=> {
        setKeyword(evt.target.value)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={keyword} />
            <button>Buscar</button>
        </form>
        <h3 className="App-title">Los gifs más populares</h3>        
        <ul>
            {
                POPULAR_GIFS.map((popularGif=>(
                    <li key={popularGif}>
                        <Link to={`/search/:${popularGif}`}>
                        Gifs de {popularGif}
                        </Link>
                    </li>
                )))
            }
        </ul>
        </>
    )
}