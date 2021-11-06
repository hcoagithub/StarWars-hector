import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PeopleDetail = () => {
    const { id } = useParams()
    const [peopledetails, setPeopleDetails] = useState([])



    useEffect(() => {
        getPeopleDetails();

    })

    const {
        eye_color,
        gender,
        hair_color,
        name,
        } = peopledetails

    const getPeopleDetails = () => {
        fetch(`https://www.swapi.tech/api/people/${id}`, {
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
                setPeopleDetails(data.result.properties)
            }).catch((error) => {
                console.log(error)
            })
    }





    return (
        <>
            <div className="container">


                <h1 className="m-3">PeopleDetails</h1>
               <Link to="/">Regresar</Link>
                <div className="card  m-2 p-2" id="carDetails">

                    <div className="card-body m-2 p-2">

                        <div className="row">
                            
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="imgDetails" alt=""/>
                           
                            
                            <h1>{name} </h1>
                                <h5 className="card-title">Description:<br /></h5>
                                

                                <hr />
                                <div className="row">
                                <div className="col-md-2">
                                    Name: <br />
                                    {name}
                                </div>

                                <div className="col-md-2">Birth Year: <br />
                                    {hair_color}
                                </div>

                                <div className="col-md-2">Eye color:<br />
                                    {eye_color}
                                </div>

                                <div className="col-md-2">Gender: <br />
                                    {gender}
                                </div>

                                <div className="col-md-2">Hair color: <br />
                                    {hair_color}
                                </div>

                                <div className="col-md-2">Eye color:<br />
                                    {eye_color}
                                </div>
                                </div>


                            
                        </div>
                    </div>
                </div>
            </div>
        </>

    )


}

export default PeopleDetail;