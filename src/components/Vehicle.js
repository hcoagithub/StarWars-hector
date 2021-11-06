import { useState, useEffect } from "react";
import {FaRegHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import './style.css'

const Vehicle = () => {

    const [vehicle, setVehicle] = useState([])
    const { actions} = useContext(Context)

    useEffect(() => {
        getVehicle()
       
    }, [])

    const getVehicle= () => {
        fetch("https://www.swapi.tech/api/vehicles", {
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
                setVehicle(data.results)
            }).catch((error) => {
                console.log(error)
            })
    }





    return (
        <>
  <h1 className="pt-2">Vehicles</h1>
       <div className="container">
          
            <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
            
{vehicle.map(veh=>(
   
    
      <div className="card col-md-3 m-2 p-2" id="cardp">
        <div className="card-body m-2 p-2">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${veh.uid}.jpg`} className="img" alt="" />
          <h5 className="card-title mt-2">{veh.name}</h5>
          <br/>
        
          <Link to={`/VehicleDetails/${veh.uid}`} className="btn btn-light text-primary border-primary bg-white" >Learn more!</Link>
          <button  className="btn btn-light text-warning border-warning bg-white" onClick={()=> actions.getAdd(veh.name)}><FaRegHeart/></button>
        </div>
      </div>
  

))}

</div>

    

</div>
        
        </>
    )
}

export default Vehicle;