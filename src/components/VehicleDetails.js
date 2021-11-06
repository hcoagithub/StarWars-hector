import { useParams} from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VehicleDetails =() =>{
const {id} = useParams()
const [vehicledetails,setVehicleDetails]=useState([])


useEffect(()=>{
 getVehicleDetails();
})

const {name, model,
vehicle_class,
manufacturer,
cost_in_credits,
length,
} = vehicledetails

const getVehicleDetails = () => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
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
            console.log(data.result.properties)
            setVehicleDetails(data.result.properties)
        }).catch((error) => {
            console.log(error)
        })
}



    return (
        <>


<div className="container">

<h1>VehicleDetails</h1>
<Link to="/">Regresar</Link>
<div className="card  m-3" id="carDetails">
<div className="card-body m-2 p-2">
    <div className="row">
    
    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="imgDetails" alt="..."/>
    </div>
    <h1>{name} </h1>
  <h5 className="card-title">Description:<br/> </h5>

  <hr/>

<div className="row">
 
                                <div className="col-md-2">
                                    Name: <br />
                                    {name}
                                </div>

                                <div className="col-md-2">Model: <br />
                                    {model}
                                </div>

                                <div className="col-md-2">Vehicle_class:<br />
                                    {vehicle_class}
                                </div>

                                <div className="col-md-2">Manufacturer: <br />
                                    {manufacturer}
                                </div>

                                <div className="col-md-2">Cost in credits: <br />
                                    {cost_in_credits}
                                </div>

                                <div className="col-md-2">Length:<br />
                                    {length}
                                </div>


</div>
</div>
</div>
</div>

      </>
 
 )

    
}

export default VehicleDetails;