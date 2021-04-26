import { FaDiceTwo, FaEllipsisV, FaTimes, FaUser, FaUserPlus } from 'react-icons/fa'
import { FormControl, Nav, Navbar, Button, NavDropdown } from "react-bootstrap"
const Priceheader = () => {
    return (
        <div>
            
           <header>
<Navbar bg="light" expand="lg">
<Navbar.Brand href="#home" className="basic-navbar-nav"><strong>Ticket</strong></Navbar.Brand>
<Navbar />

<Nav className="ml-auto">
<FaUserPlus className="float-right"/>
<FaEllipsisV className="float-right"/>
</Nav>

</Navbar>
</header> 
        </div>
    )
}

export default Priceheader
