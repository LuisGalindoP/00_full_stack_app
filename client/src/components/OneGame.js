import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "@reach/router";



const OneGame = (props) => {

    const [game, setGame] = useState({})
    const {id} = props;

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/games/${id}`)
        .then((res)=>{
            console.log("This is the response from get games/id", + res);
            console.log("This is the res.data", + res.data)
            setGame(res.data);
        })
            .catch((err)=> {
                console.log(err);
            })
    },[id]);

    return (
        <div>
            <h2>OneGame component</h2>
            <h3>Name: {game.name}</h3>
            <img src={game.image} alt={game.name} width={"100px"}/>
            <h4>Year released: {game.yearReleased}</h4>
            <h4>Genre: {game.genre}</h4>
            <h4>Rating: {game.rating}</h4>
            <h4>Company: {game.company}</h4>
            <h5>
                <Link to={"/"}>Home</Link>
            </h5>
        </div>
    )
};

export default OneGame;
