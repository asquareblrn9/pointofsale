import { FormControl, Nav, Navbar, Button, NavDropdown } from "react-bootstrap"

const header = () => {
    return (
       
           <header>
<Navbar bg="success" className="text-white" expand="lg">
<Navbar.Brand href="#home" className="basic-navbar-nav"></Navbar.Brand>
<Navbar />

<Nav className="mr-auto">
<NavDropdown title="All Items" id="basic-nav-dropdown" style={{color:"#fff"}}>
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
</Nav>

</Navbar>
</header> 
        
    )
}

export default header
