import React from 'react'
import TicketList from './TicketList'

const contact = async() => {
    const res=await fetch('http://localhost:4000/tickets')
    res.json()

  return (
    <div>
        <h1>contact</h1>
        <TicketList/>

      
    </div>
  )
}

export default contact
