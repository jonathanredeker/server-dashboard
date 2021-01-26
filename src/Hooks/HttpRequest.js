import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function useAxiosGet(endpointURL) {

    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false,
    })

    // TEMPORARY
    // I didn't want to spam the endpoint with requests,
    // so I'm using useEffect to make a single request.
    // I will replace this with an interval soon.
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
                    console.table(response.data) // Debug
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

    return request
}