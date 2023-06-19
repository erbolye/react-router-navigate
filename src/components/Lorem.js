import React from "react";
import { useNavigate } from "react-router-dom";

const Lorem = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1 style={{color: 'red'}}>Lorem ipsum dolor sit amet.</h1>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    );
}

export default Lorem;