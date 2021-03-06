import React from 'react'

function Loader() {
    return (
        <div className="loader-wrapper">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading</span>
            </div>
        </div>
    )
}

export default Loader