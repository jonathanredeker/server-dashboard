import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useInterval } from './Time'

export function useAxiosGet(endpointURL) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect(
        () => {
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
        },
        [endpointURL]
    )

    useInterval(
        () => {
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
        },
        300000
    )

    return request
}