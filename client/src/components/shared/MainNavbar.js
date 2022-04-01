import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout }) => {
  
  const rightNavItem = () => {
    if (user) {
      // this is links where you see once login in
      return (
        <>
          <Nav.Link>
            <Link to='/cats'>
              Cats
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/randomCats'>
              Random Cats
            </Link>
          </Nav.Link>
          <Nav.Link onClick={() => handleLogout()}>
            Logout
          </Nav.Link>
        </>
      )
    } else {
      // link show when not logged in
      return (
        <>
          <Nav.Link>
            <Link to='/login'>
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/register'>
              Sign Up
            </Link>
          </Nav.Link>
        </>
      )
    }
  }
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link to='/'><Navbar.Brand>CatCafe</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {/* Links that show up regardless of login or not */}
              { rightNavItem() }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedMainNavbar;