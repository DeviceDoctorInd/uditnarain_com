import React from 'react'
import { useState, CSSProperties } from "react";
import "./index.css";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div className="loader-wrapper">

            <div class="reverse-spinner"></div>

        </div>
    )
}

export default Loader