import { useState, useEffect } from "react";
import {FaRegHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import './style.css'


const Planet = () => {

    const [planet, setPlanet] = useState([])

    const { actions} = useContext(Context)
    

    useEffect(() => {
        getPlanet()
       
    }, [])

    const getPlanet = () => {
        fetch("https://www.swapi.tech/api/planets", {
            method: "GET",
            //body: JSON.stringify([]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.ok);
                console.log(res.status);
                return res.json()
            })
            .then((data) => {
                console.log(data.results)
                setPlanet(data.results)
            }).catch((error) => {
                console.log(error)
            })
    }





    return (
        <>
 <h1 className="pt-2">Planet</h1>
       <div className="container">
           
            <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
            
{planet.map(pla=>(
   
    
      <div className="card col-md-3 m-2 p-2" id="cardp">
        <div className="card-body m-2 p-2">
            <img src={pla.uid == 1 ? `https://th.bing.com/th/id/OIP.Vyn1buwPgCIxXLuCvLAJhwHaHa?pid=ImgDet&rs=1` : `https://starwars-visualguide.com/assets/img/planets/${pla.uid}.jpg`} className="img" alt=""/>
          <h5 className="card-title mt-2">{pla.name}</h5>
          <br/>

          <Link to={`/PlanetDetails/${pla.uid}`} className="btn btn-light text-primary border-primary bg-white" >Learn more!</Link>
          <button  className="btn btn-light text-warning border-warning bg-white" onClick={()=> actions.getAdd(pla.name)}><FaRegHeart/></button>
        </div>
      </div>
  

))}

</div>

    

</div>
        
        </>
    )
}

export default Planet;