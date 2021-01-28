import react from 'react'
import { useParams } from 'react-router-dom'

function NodeDetails() {
    const {id} = useParams();
    
    return (
        <div>
            {id}
        </div>
    )
}

export default NodeDetails