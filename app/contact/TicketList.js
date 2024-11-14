import Link from "next/link"

async function getTickets() {
    const res=await fetch('http://localhost:4000/tickets')
    return res.json()
    
}
export default async function TicketList(){
    const tickets=await getTickets()
    return(
        <div>
            {tickets.map((ticket)=>(
                                <div key={ticket.id} className="card my-5">
                                                    <Link href={`/contact/${ticket.id}`}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body}</p>
                    <p>{ticket.priority}</p>
                    </Link>



                </div>

                
            ))}
        </div>
    )

}