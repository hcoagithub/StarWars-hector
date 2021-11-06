import { useParams} from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PlanetDetails =() =>{
const {id} = useParams()
const [planetdetails,setPlanetDetails]=useState([])


useEffect(()=>{
 getPlanetDetails();
})

const {
diameter,
gravity,
name,
population,
rotation_period,
terrain,
} = planetdetails

const getPlanetDetails = () => {
    fetch(`https://www.swapi.tech/api/planets/${id}`, {
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
            setPlanetDetails(data.result.properties)
        }).catch((error) => {
            console.log(error)
        })
}



    return (
        <>
      
      <div className="container">


<h1 className="m-3">PlanetDetails</h1>
<Link to="/" >Regresar</Link>
<div className="card  m-2 p-2" id="carDetails">

    <div className="card-body m-2 p-2">

        <div className="row">
            
                <img src={id == 1 ? `https://th.bing.com/th/id/OIP.Vyn1buwPgCIxXLuCvLAJhwHaHa?pid=ImgDet&rs=1` :`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="imgDetails" alt=""/>
           
            
            <h1>{name} </h1>
                <h5 className="card-title">Description:<br /></h5>
                

                <hr />
                <div className="row">
                <div className="col-md-2">
                    Name: <br />
                    {name}
                </div>

                <div className="col-md-2">Diameter: <br />
                    {diameter}
                </div>

                <div className="col-md-2">Population:<br />
                    {population}
                </div>

                <div className="col-md-2">Terrain: <br />
                    {terrain}
                </div>

                <div className="col-md-2">Gravity: <br />
                    {gravity}
                </div>

                <div className="col-md-2">Rotation period:<br />
                    {rotation_period}
                </div>
                </div>


            
        </div>
    </div>
</div>
</div>
</>

 )

    
}

export default PlanetDetails;