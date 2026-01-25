import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [dateTime, setDateTime] = useState('')

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()
            const day = now.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
            const month = now.toLocaleDateString('en-US', { month: 'short' }).toLowerCase()
            const date = now.getDate()
            const time = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).toLowerCase()

            setDateTime(`${day} ${month} ${date} ${time}`)
        }

        updateDateTime()
        const interval = setInterval(updateDateTime, 60000) // Update every minute

        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{ fontSize: '10px', color: 'white' }}>{dateTime}</div>
    )
}

export default DateTime