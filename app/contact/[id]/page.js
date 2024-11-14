import React from 'react'

async function getTickets(id){
  const res=await fetch('http://localhost:4000/tickets/'+id)
  return res.json()

}

async function TicketDetails({params}) {
    const ticket=await getTickets(params.id)
  return (
    <div className='card'>
      <h3>{ticket.title}</h3>
      created by {ticket.user_email}
      <p>{ticket.body}</p>
      {ticket.priority}
      
    </div>
  )
}

export default TicketDetails
