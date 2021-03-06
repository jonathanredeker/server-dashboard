import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

function Navigation() {
    return (
        <div className="row w-100 navigation m-0 d-flex align-items-center">
            <div className="logo pl-3 pr-3">
                <img src={logo} />
            </div>
            <div className="col p-0">
                <span className="navigation-title">
                    <Link to="/">Node Dashboard</Link>
                </span>
            </div>
        </div>
    )
}

export default Navigation