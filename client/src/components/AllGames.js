import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from '@reach/router';


const AllGames = (props) => {
    const [allGames, setAllGames] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/games")
            .then((res)=> {
                console.log("This is the res Object from get all", res);   //It returns the answer from the server/controllers/game.controller.js as an Object
                console.log(res.data); //res.data is the array inside the res Object
                setAllGames(res.data);
            })
            .catch((err)=>
            {console.log(err)
            })
    },[])

    return (
        <div>
            <h2>AllGames component</h2>
            <h3><Link to={"/new"}>Create a new game</Link></h3>
            {allGames.map((game, index)=> {
                return (
                    <div key={index} style={{marginLeft: "20px"}}>
                        <Link to={`/game/${game._id}`}>
                            <h3 >{game.name}</h3>
                            <img src={game.image} width={"100px"}/>
                        </Link>
                    </div>

                )
            })}
        </div>
    )
};

export default AllGames;
