import React, { useEffect, useRef } from 'react'


export function useInterval(callback, timeout) {
    const callbackRef = useRef()

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const intervalID = setInterval(() => {
            callbackRef.current()
        }, timeout)
        return () => clearInterval(intervalID)
    }, [timeout])
    
}