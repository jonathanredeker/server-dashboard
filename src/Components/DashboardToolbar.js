import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function DashboardToolbar(props) {
    let dropdowns = []

    // Dropdown pagination
    if (props.page > 1) {
        dropdowns.push(
            <Dropdown.Item 
                href={`/${props.page - 1}/${props.limit}`}
                key={props.page - 1}
            >
                Page {props.page - 1}
            </Dropdown.Item>)
    }
    
    dropdowns.push(
        <Dropdown.Item 
            href={`/${props.page}/${props.limit}`}
            key={props.page}
        >
            Page {props.page}
        </Dropdown.Item>)

    if (props.page < props.totalNodes / props.limit) {
        dropdowns.push(
            <Dropdown.Item 
                href={`/${props.page + 1}/${props.limit}`}
                key={props.page + 1}
            >
                Page {props.page + 1}
            </Dropdown.Item>)
    }

    return (
        <div className="row ml-4 mr-4 pl-3 pr-3 mt-5 d-flex justify-content-end flex-nowrap">
            <div className="col-sm-auto mt-2 p-0 d-flex justify-content-end">
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title={`Page ${props.page}`}
                    size="sm"
                >
                    <Dropdown.Item 
                        href={`/1/${props.limit}`}
                    >
                        First Page
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    {dropdowns}
                    <Dropdown.Divider />
                    <Dropdown.Item 
                        href={`/${Math.ceil(props.totalNodes / props.limit)}/${props.limit}`}
                    >
                        Last Page
                    </Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="col-sm-auto mt-2 ml-3 p-0">
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title={`Limit Results (${props.limit})`}
                    size="sm"
                >
                    <Dropdown.Item href={`/1/10`}>10 Results</Dropdown.Item>
                    <Dropdown.Item href={`/1/20`}>20 Results</Dropdown.Item>
                    <Dropdown.Item href={`/1/30`}>30 Results</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href={`/1/${props.totalNodes}`}>All Results ({`${props.totalNodes}`})</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}

export default DashboardToolbar