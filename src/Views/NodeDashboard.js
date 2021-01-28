import React from 'react'
import { useParams } from 'react-router-dom'
import NodeItem from '../Components/NodeItem'
import { useAxiosGet, useAxiosGetTotalNodes } from '../Hooks/HttpRequest'
import Loader from '../Components/Loader'
import Error from '../Components/Error';
import DashboardToolbar from '../Components/DashboardToolbar'

function NodeDashboard() {
    const {page = 1, limit = 10} = useParams()
    const endpointURL = `https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats?p=${page}&l=${limit}`
    let totalNodes = useAxiosGetTotalNodes()
    let nodes = useAxiosGet(endpointURL)
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
            <Error
                message="Could not retrieve data from the endpoint. Please contact a server administrator."
            />
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