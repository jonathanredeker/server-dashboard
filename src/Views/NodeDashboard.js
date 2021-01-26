import react from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import NodeItem from '../Components/NodeItem'
import { useAxiosGet } from '../Hooks/HttpRequest'

function NodeDashboard() {

    const { page = 1, limit = 10 } = useParams()
    const endpointURL = `https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats?p=${page}&l=${limit}`
    let nodes = useAxiosGet(endpointURL)
    let content = null

    if (nodes.data) {
        content = 
            <div className="">
                <div className="">
                    {
                        nodes.data.map((node, key) => 
                            <NodeItem 
                                data={node}
                                key={key}
                            />
                        )
                    }
                </div>
            </div>
    }

    return (
        <div class="node-list-wrapper">
            {content}
        </div>
    )
    
}

export default NodeDashboard