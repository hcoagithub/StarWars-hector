import { Link } from 'react-router-dom';
import Favoritos from './Favorites';
import './style.css';



const Navbar = () => {



  return (


    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">

    <div className="container d-flex">

     <Link to="/" className="justify-content-start">
        <img  className="Starwars" src="https://th.bing.com/th/id/R.3fbfd790082f076e1f38837ea282e2a0?rik=0ToMQvgzhf9UJA&pid=ImgRaw&r=0" alt="" />
      </Link>

      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <Favoritos/>
        </div>
    
       

      </div>
    

   

  </nav>




  )
}

export default Navbar;