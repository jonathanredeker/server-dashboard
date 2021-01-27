import React from 'react'
import {
    Provider,
    defaultTheme,
    Button,
    Meter
} from '@adobe/react-spectrum';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom';

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

    let ramMeterVariant;
    let diskMeterVariant;
    if (ramUsage < 50) {
        ramMeterVariant = "success"
    } else if (ramUsage < 80) {
        ramMeterVariant = "warning"
    } else {
        ramMeterVariant = "danger"
    }
    if (diskUsage < 50) {
        diskMeterVariant = "success"
    } else if (diskUsage < 80) {
        diskMeterVariant = "warning"
    } else {
        diskMeterVariant = "danger"
    }

    return (

        <div className="node-item ml-4 mr-4 col-lg-5 rounded p-4 mt-4" key={props.data.key}>

            <div className="row node-item-title mb-4 d-flex align-items-center justify-content-between">
                <div className="col-sm-6 col-6 d-block">
                    <h5 className="name p-0 m-0">
                        Node {props.data.id}
                    </h5>
                    <small className="text-muted p-0">
                        Active Since: {upSince.getDay()+1} {monthNames[upSince.getMonth()]}, {upSince.getFullYear()}
                    </small>
                </div>
                <div class="col-sm-6 col-6 d-flex justify-content-end">
                    <Link to={`/node/${props.data.id}`}>
                        <button type="button" class="btn btn-outline-primary">View Details</button>
                    </Link>
                </div>
            </div>

            <div className="row progress-labels pb-2 d-flex justify-content-between text-light">
                <div class="col meter-label text-muted">
                    RAM
                </div>
                <div class="col meter-value text-right text-muted">
                    {ramUsage}%
                </div>
            </div>
            <div class="row pb-3">
                <div class="col">
                    <ProgressBar animated variant={ramMeterVariant} now={ramUsage}/>
                </div>
            </div>

            <div className="row progress-labels pb-2 d-flex justify-content-between text-light">
                <div class="col meter-label text-muted">
                    Storage
                </div>
                <div class="col meter-value text-right text-muted">
                    {ramUsage}%
                </div>
            </div>
            <div class="row pb-2">
                <div class="col">
                    <ProgressBar animated variant={diskMeterVariant} now={diskUsage}/>
                </div>
            </div>


        </div>

    )

}

export default NodeItem