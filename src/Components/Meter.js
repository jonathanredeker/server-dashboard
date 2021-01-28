import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Meter(props) {
    let variant;

    if (props.value < 50) {
        variant = "success"
    } else if (props.value < 80) {
        variant = "warning"
    } else {
        variant = "danger"
    }

    return (
        <div>
            <div className="row progress-labels pb-2 d-flex justify-content-between text-light font-weight-light">
                <div className="col meter-label">
                    {props.label}
                </div>
                <div className="col meter-value text-right">
                    {props.labelValue}
                </div>
            </div>
            <div className="row pb-3">
                <div className="col">
                    <ProgressBar animated variant={variant} now={props.value}/>
                </div>
            </div>
        </div>
    )
}

export default Meter