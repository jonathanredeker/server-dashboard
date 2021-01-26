import React from 'react'

function NodeItem(props) {

    return (
        
        <div className="" key={props.data.key}>

            <div className="">

                <div className="">
                    <span className="">Node #{props.data.id}</span>
                </div>

                <div className="">
                    RAM:
                </div>

                <div className="">
                    Disk:
                </div>

                <div className="">
                    Up Since:
                </div>

            </div>

        </div>

    )

}

export default NodeItem