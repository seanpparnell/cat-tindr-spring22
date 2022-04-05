import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/shared/Footer';
import Home from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Cats from './components/cats/Cats';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CatForm from './components/cats/CatForm';
import Notes from './components/notes/Notes';
import RandCats from './components/cats/RandCats';
import Profile from './components/auth/Profile';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/' element={ <ProtectedRoute />}>
            <Route path='/cats' element={ <Cats /> } />
            <Route path='/randomCats' element={ <RandCats /> } />
            <Route path='/cats/:catId/edit' element={ <CatForm /> } />
            <Route path='/cats/:catId/notes' element={ <Notes /> } />
            <Route path='/profile' element={ <Profile /> } />
          </Route>
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='*' element={ <Nomatch /> } />
        </Routes>
      </>
    </FetchUser>
    <Footer />
  </>
)

export default App;