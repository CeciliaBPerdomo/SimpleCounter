import React from "react"
import Card from "./card.jsx"

const SecondsCounter = ({ digito }) => {
    return (
        <div className="d-flex">
            <Card digito={Math.floor(digito / 10000 % 10)} />
            <Card digito={Math.floor(digito / 1000 % 10)} />
            <Card digito={Math.floor(digito / 100 % 10)} />
            <Card digito={Math.floor(digito / 10 % 10)} />
            <Card digito={digito % 10} />
        </div>
    )
}

export default SecondsCounter