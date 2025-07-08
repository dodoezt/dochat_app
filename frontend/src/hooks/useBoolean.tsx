import React, { useState, useCallback, useMemo } from 'react'

export type UseBooleanResult = {
  value: boolean
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}


export const UseBoolean = (defaultValue: boolean = false): UseBooleanResult => {
    const [value, setValue] = useState<boolean>(defaultValue)

    const toggle = useCallback(() => {
        setValue((prev) => !prev)
    }, [])

    const setTrue = useCallback(() => {
        setValue(true)
    }, [])

    const setFalse = useCallback(() => {
        setValue(false)
    }, [])

    return useMemo(() => ({
        value,
        toggle,
        setTrue,
        setFalse
    }), [value, toggle, setTrue, setFalse])
}
