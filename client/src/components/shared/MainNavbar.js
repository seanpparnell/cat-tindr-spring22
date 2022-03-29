import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const MainNavbar = ({ user, handleLogout }) => {
  
  const rightNavItem = () => {
    if (user) {
      // this is links where you see once login in
      return (
        <>
          <Link to='/cats'>
            <li>
              Cats
            </li>
          </Link>
          <li onClick={() => handleLogout()}>
            Logout
          </li>
        </>
      )
    } else {
      // link show when not logged in
      return (
        <>
          <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              SignUp
            </li>
          </Link>
        </>
      )
    }
  }
  
  return (
    <>
      <nav>
        <ul>
          {/* Links that show up regardless of login or not */}
          <Link to='/'>
            Home
          </Link>
          { rightNavItem() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedMainNavbar;