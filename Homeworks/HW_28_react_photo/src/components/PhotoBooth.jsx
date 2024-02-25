import React, { useState } from "react";
import Plane from "./Plane.jsx";
import { planes } from "../utils/constants.js";

const PhotoBooth = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageObject) => {
        setSelectedImage(imageObject === selectedImage ? null : imageObject);
    };

    return (
        <div className="d-flex justify-content-center m-5">
            {selectedImage ? (
                <div onClick={() => setSelectedImage(null)} style={{ cursor: 'pointer' }}>
                    <img src={selectedImage.src} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
                    <p>{selectedImage.description}</p> {/* Display the description text */}
                </div>
            ) : (
                <section className="col-3 w-50 row ">
                    {planes.map((plane, index) => (
                        <Plane key={index} image={plane.src} onClick={() => handleImageClick(plane)} />
                    ))}
                </section>
            )}
        </div>
    );
};

export default PhotoBooth;