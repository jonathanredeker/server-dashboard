import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useInterval } from './Time'

export function useAxiosGet(endpointURL) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false,
    })
    const [timeout, setTimeout] = useState(0)

    useInterval(() => {
        setRequest({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(endpointURL)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false,
                })
            })
            .catch(() => {
                
                setRequest({
                    loading: false,
                    data: null,
                    error: true,
                })
            })
        if (timeout == 0) {
            setTimeout(300000)
        }
        },
        timeout
    )
    return request
}

export function useAxiosGetTotalNodes() {
    const endpointURL = `https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats`
    const [nodeCount, setNodeCount] = useState(0)

    useEffect(() => {
        axios.get(endpointURL)
            .then(response => {
                if (response.data) {
                    setNodeCount(response.data.length)
                }
            })
            .catch(() => {
                setNodeCount(0)
            })
        },
        [endpointURL]
    )
    return nodeCount
}