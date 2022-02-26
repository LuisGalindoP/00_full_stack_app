import React, {useEffect, useState}  from "react";
import {Link, navigate} from "@reach/router";
import axios from "axios";

const NewGame = (props) => {
    const [name, setName] = useState("");
    const [yearReleased, setYearReleased] = useState(""); //JS converts the Number type to String if we do it this way
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [company, setCompany] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/games", {
            name,
            yearReleased,
            genre,
            image,
            rating,
            company
        })
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>
            <h2>NewGame component</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value = {name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Year Released: </label>
                    <input
                        type="text"
                        value={yearReleased}
                        onChange={(e)=>setYearReleased(e.target.value)}
                    />
                </div>
                <div>
                    <label>Genre: </label>
                    <select
                        value={genre}
                        onChange={(e)=>setGenre(e.target.value)}
                        name="genre"
                    >
                        <option value="none" defaultValue hidden>Select a Genre</option>
                        <option value="RPG">RPG</option>
                        <option value="Strategy">Strategy</option>
                        <option value="FPS">FPS</option>
                        <option value="Platform">Platform</option>
                        <option value="Casual">Casual</option>
                        <option value="Survival">Survival</option>
                        <option value="Action">Action</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sports">Sports</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div>
                    <label>Image: </label>
                    <input
                        type="text"
                        value = {image}
                        onChange={(e)=>setImage(e.target.value)}
                    />
                </div>
                <div>
                    <label>Rating: </label>
                    <select
                        value={rating}
                        onChange={(e)=>setRating(e.target.value)}
                        name="rating"
                    >
                        <option value="none" defaultValue hidden>Select a Rating</option>
                        <option value="T">T</option>
                        <option value="M">M</option>
                        <option value="MA">MA</option>
                        <option value="O">O</option>
                        <option value="AO">AO</option>
                        <option value="No rated yet">No rated yet</option>
                    </select>
                </div>
                <div>
                    <label>Company: </label>
                    <input
                        type="text"
                        value = {company}
                        onChange={(e)=>setCompany(e.target.value)}
                    />
                </div>
                <button type={"submit"}>Add</button>
            </form>
            <h5>
                <Link to={"/"}>Home</Link>
            </h5>
        </div>
    )
};

export default NewGame;
