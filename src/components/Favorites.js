import React, { useEffect } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import './style.css'

const Favoritos=()=>{

const {store, actions} = useContext (Context)

useEffect(() => {
 console.log(store.listaFav, "favorito")

}, [store.listaFav])



    return (
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle btn btn-dark text-light"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
            <p className="Contador btn btn-secondary m-2">{store.countFav>0 && store.countFav}</p>
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {
                  
                   !!store.listaFav &&
                   store.listaFav.map(fav=>{
                
                      return (
<li><button className="dropdown-item"  onClick={()=> actions.getDetele(fav)} >{fav}<FaTrash/></button></li>
                      )
                  })
                  
              }
            
          </ul>
        </li>
       
      </ul>
    )
}

export default Favoritos;