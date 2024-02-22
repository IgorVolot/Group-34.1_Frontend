import React from "react";
import Plane from "./Plane.jsx";
import {planes} from "../utils/constants.js";

const PhotoBooth = () => {
    return (
        <div className="d-flex justify-content-center m-5">
            <section className="col-3 w-50 row ">
                {planes.map((plane, index) => <Plane key={index} image={plane} /> )}
            </section>
        </div>
    )
}

export default PhotoBooth