import React from 'react'

function Error(props) {
    return (
        <div className="row m-0 p-0 d-flex justify-content-center">
            <div className="alert alert-danger m-4 mt-5 text-danger" role="alert">
                {props.message}
            </div>
        </div>
    )
}

export default Error