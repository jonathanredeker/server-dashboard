import react, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NodeItem from '../Components/NodeItem'
import { useAxiosGet, useAxiosGetTotalNodes } from '../Hooks/HttpRequest'
import Loader from '../Components/Loader'
import { useInterval } from '../Hooks/Time'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import DashboardToolbar from '../Components/DashboardToolbar'

function NodeDashboard() {
    const { page = 1, limit = 10 } = useParams()
    const endpointURL = `https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats?p=${page}&l=${limit}`
    let nodes = useAxiosGet(endpointURL)
    let totalNodes = useAxiosGetTotalNodes()
    let content = null
    let toolbar = null
    let pageDisplay = 0
    let pageDropdowns = []
    
    if (nodes.loading) {
        content = <Loader />
    }
    
    if (nodes.data) {
        for (let i = 0; i < totalNodes; i += limit) {
            pageDropdowns.push(<Dropdown.Item href={`/${++pageDisplay}`}>Page {pageDisplay}</Dropdown.Item>)
        }
        
        toolbar = 
            <DashboardToolbar 
                page={page}
                limit={limit}
                pageDropdowns={pageDropdowns}
                pageDisplay={pageDisplay}
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
            <div class="alert alert-danger m-4 mt-5 text-danger" role="alert">
                Could not retrieve data from the endpoint; please contact a server administrator!
            </div>
    }

    return (
        <div class="row m-0">
            <div class="col">
                {toolbar}
                <div class="row m-0 pt-4 d-flex justify-content-around">
                    {content}
                </div>
            </div>
        </div>
    )
    
}

export default NodeDashboard