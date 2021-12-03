import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavBar = () => (
    <Navbar bg="dark" variant="light" id="navbar-horiz">
    <Nav className="me-auto">
        <Link to="/">
      <div className="text-white">Home</div>
      </Link>

      <Link to="/days">
      <div className="heart-saved ml-5">10 Days</div>
      </Link>

      <Link to="/month">
      <div className="heart-saved ml-5">Monthly</div>
      </Link>
    </Nav>
  </Navbar>
)

export default MyNavBar