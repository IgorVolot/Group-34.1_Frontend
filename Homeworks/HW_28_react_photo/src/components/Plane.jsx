import React from "react";

const Plane = ({ image, onClick }) => {
    return (
        <div className='col-4 d-flex'>
            <img className="btn img-thumbnail p-1" src={image} alt="Plane" onClick={() => onClick(image)}/>
        </div>
    );
};

export default Plane;