import React from 'react'
import { Link } from 'react-router-dom'
import Meter from '../Components/Meter'

function NodeItem(props) {

    // RAM statistics
    const allocatedRAM = props.data.allocated_ram
    const freeRAM = props.data.free_ram
    const totalRAM = freeRAM + allocatedRAM
    const ramUsage = Math.trunc(allocatedRAM / totalRAM * 100)

    // Disk statistics
    const allocatedDisk = props.data.allocated_disk
    const freeDisk = props.data.free_disk
    const totalDisk = freeRAM + allocatedDisk
    const diskUsage = Math.trunc(allocatedDisk / totalDisk * 100)

    // Date since node went up
    const upSince = new Date(props.data.up_since)
    const monthNames = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ]

    return (
        <div className="node-item ml-4 mr-4 col-lg-5 rounded p-4 mt-4" key={props.data.key}>
            <div className="row node-item-title mb-4 d-flex align-items-center justify-content-between">
                <div className="col-sm-6 col-6 d-block">
                    <h5 className="p-0 m-0">
                        Node {props.data.id}
                    </h5>
                    <small className="text-muted p-0 font-weight-light">
                        Active since {monthNames[upSince.getMonth()]} {upSince.getDay()+1}, {upSince.getFullYear()}
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
                value={ramUsage}
            />
            <Meter
                label="Disk"
                value={diskUsage}
            />
        </div>
    )
}

export default NodeItem