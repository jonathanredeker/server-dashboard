import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function DashboardToolbar(props) {
    return (
        <div class="row ml-5 mr-5 pl-3 pr-3 mt-5">
            <div class="col-md-10 d-flex justify-content-end">
                <DropdownButton id="dropdown-basic-button" title={`Page ${props.page}`}>
                    {props.pageDropdowns}
                </DropdownButton>
            </div>
            <div class="col-md-2 d-flex justify-content-end">
                <DropdownButton id="dropdown-basic-button" title={`Limit Results (${props.limit})`}>
                    <Dropdown.Item href={`/1/10`}>10 Results</Dropdown.Item>
                    <Dropdown.Item href={`/1/20`}>20 Results</Dropdown.Item>
                    <Dropdown.Item href={`/1/30`}>30 Results</Dropdown.Item>
                    <Dropdown.Item href={`/1/${props.totalNodes}`}>All Results ({`${props.totalNodes}`})</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}

export default DashboardToolbar