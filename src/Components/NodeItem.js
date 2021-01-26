import React from 'react'

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
    const upSince = new Date(props.data.up_since)

    return (

        <div className="" key={props.data.key}>

            <div className="">
                <span className="">
                    Node #{props.data.id}
                </span>
            </div>

            <div className="">
                <span>
                    RAM: {ramUsage}%
                </span>
            </div>

            <div className="">
                <span>
                    Disk: {diskUsage}%
                </span>
            </div>

            <div className="">
                <span>
                    Online Since: {upSince.getDay()} {monthNames[upSince.getMonth()]}, {upSince.getFullYear()}
                </span>
            </div>

        </div>

    )

}

export default NodeItem