import { Link } from 'react-router-dom';

const Home = () => (
  <>
    {/* <img src='' /> */}
    <h3>Medium header</h3>
    <p>text here</p>
    <Link to='/register'>
      <button>
        Sign Up
      </button>
    </Link>
    <Link to='/login'>
      <button>
        Login
      </button>
    </Link>
    {/* <img src='' /> */}
    <h3>Medium header</h3>
    <p>text here</p>
    <h3>FAQ</h3>
    <p>Accordian</p>
  </>
)

export default Home;