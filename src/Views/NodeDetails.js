import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import Error from '../Components/Error'
import Meter from '../Components/Meter'
import { useAxiosGet } from '../Hooks/HttpRequest'
const commaNumber = require('comma-number')
const date = require('date-and-time');

function NodeDetails() {
    const {id} = useParams();
    const endpointURL = `https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats/${id}`
    let node = useAxiosGet(endpointURL)
    let totalRAM, ramUsage, totalDisk, diskUsage, upSince
    let content

    if (node.loading) {
        content = <Loader />
    }

    if (node.data) {
        totalRAM = node.data.free_ram + node.data.allocated_ram
        ramUsage = Math.trunc(node.data.allocated_ram / totalRAM * 100)
        totalDisk = node.data.free_disk + node.data.allocated_disk
        diskUsage = Math.trunc(node.data.allocated_disk / totalDisk * 100)
        upSince = new Date(node.data.up_since)

        content = 
            <div className="row d-flex justify-content-center m-0 mt-5 mb-5 ml-5 mr-5">
                <div className="col-lg-8 node-details mt-2 rounded p-4">
                    <div className="row node-item-title mb-4 d-flex align-items-center justify-content-between" key={node.data.id}>
                        <div className="col-sm-6 col-6 d-block">
                            <h5 className="p-0 m-0">
                                Node {node.data.id}
                            </h5>
                            <small className="text-muted p-0 font-weight-light">
                                Active since {date.format(upSince, "MMMM D, YYYY")}
                            </small>
                        </div>
                    </div>
                    <Meter 
                        key={node.data.id + 1}
                        label="RAM"
                        labelValue={`${commaNumber(node.data.allocated_ram, ',')} MB of ${commaNumber(totalRAM, ',')} MB`}
                        value={ramUsage}
                    />
                    <Meter 
                        key={node.data.id + 2}
                        label="Disk"
                        labelValue={`${commaNumber(node.data.allocated_disk, ',')} MB of ${commaNumber(totalDisk, ',')} MB`}
                        value={diskUsage}
                    />
                </div>
            </div>
    }

    if (node.error) {
        content = 
            <Error
                message="Could not retrieve data from the endpoint. Please contact a server administrator."
            />
    }
    
    return (
        <div>
            {content}
        </div>
    )
}

export default NodeDetails