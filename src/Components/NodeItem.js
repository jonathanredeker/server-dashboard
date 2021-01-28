import React from 'react'
import { Link } from 'react-router-dom'
import Meter from '../Components/Meter'
const date = require('date-and-time');

function NodeItem(props) {
    const totalRAM = props.data.free_ram + props.data.allocated_ram
    const totalDisk = props.data.free_disk + props.data.allocated_disk
    const ramUsage = Math.trunc(props.data.allocated_ram / totalRAM * 100)
    const diskUsage = Math.trunc(props.data.allocated_disk / totalDisk * 100)
    const upSince = new Date(props.data.up_since)

    return (
        <div className="col-lg-5 node-item ml-4 mr-4 rounded p-4 mt-4" key={props.data.key}>
            <div className="row node-item-title mb-4 d-flex align-items-center justify-content-between">
                <div className="col-sm-6 col-6">
                    <h5 className="p-0 m-0">
                        Node {props.data.id}
                    </h5>
                    <small className="text-muted p-0 font-weight-light">
                        Active since {date.format(upSince, "MMMM D, YYYY")}
                    </small>
                </div>
                <div className="col-sm-6 col-6 d-flex justify-content-end">
                    <Link to={`/node/${props.data.id}`}>
                        <button type="button" className="btn btn-outline-primary">View Details</button>
                    </Link>
                </div>
            </div>
            <Meter
                label="RAM"
                labelValue={`${ramUsage}%`}
                value={ramUsage}
            />
            <Meter
                label="Disk"
                labelValue={`${diskUsage}%`}
                value={diskUsage}
            />
        </div>
    )
}

export default NodeItem