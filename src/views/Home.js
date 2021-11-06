import People from "../components/People";
import Vehicle from "../components/Vehicle";
import Planet from "../components/Planet";

import './style.css'

const Home =() => {
    return (
        <div className="container">
          
    <People/>
    <Planet/>
    <Vehicle/>
    </div>
   
    )
}

export default  Home; 