import React from "react"

const Card = ({ digito }) => {
    return (
        <div>
            <div className="card text-bg-dark mb-3 m-1">
                <div className="card-body">
                    <h5 className="card-title">
                        {digito}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Card