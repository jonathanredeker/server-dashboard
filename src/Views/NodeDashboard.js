import React from 'react'
import { useParams } from 'react-router-dom'
import NodeItem from '../Components/NodeItem'
import { useAxiosGet, useAxiosGetTotalNodes } from '../Hooks/HttpRequest'
import Loader from '../Components/Loader'
import DashboardToolbar from '../Components/DashboardToolbar'

function NodeDashboard() {
    const {page = 1, limit = 10} = useParams()
    const endpointURL = `https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats?p=${page}&l=${limit}`
    let nodes = useAxiosGet(endpointURL)
    let totalNodes = useAxiosGetTotalNodes()
    let toolbar = null
    let content = null
    
    if (nodes.loading) {
        content = <Loader />
    }
    
    if (nodes.data) {
        toolbar = 
            <DashboardToolbar 
                page={parseInt(page)}
                limit={parseInt(limit)}
                totalNodes={totalNodes}
            />

        content = 
            nodes.data.map((node, key) => 
                <NodeItem 
                    data={node} 
                    key={key} 
                />
            )
    }

    if (nodes.error) {
        content = 
            <div className="alert alert-danger m-4 mt-5 text-danger" role="alert">
                Could not retrieve data from the endpoint; please contact a server administrator!
            </div>
    }

    return (
        <div className="row m-0">
            <div className="col">
                {toolbar}
                <div className="row m-0 pt-4 d-flex justify-content-around">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default NodeDashboard