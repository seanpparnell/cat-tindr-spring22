import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const CatContext = React.createContext();

export const CatConsumer = CatContext.Consumer;

const CatProvider = ({ children, user }) => {
  const [cats, setCats] = useState([])
  const [randCat, setRandCat] = useState({})

  const navigate = useNavigate()

  const getAllCats = () => {
    axios.get(`/api/users/${user.id}/cats`)
      .then( res => setCats(res.data) )
      .catch( err => console.log(err))
  }

  const addCat = (cat) => {
    axios.post(`/api/users/${user.id}/cats`, { cat })
      .then( res => setCats([...cats, res.data]) )
      .catch( err => console.log(err))
  }

  const updateCat = (id, cat) => {
    axios.put(`/api/users/${user.id}/cats/${id}`, { cat })
      .then( res => {
        const newUpdatedCats = cats.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setCats(newUpdatedCats)
        navigate('/cats')
      })
      .catch( err => console.log(err))
  }

  const deleteCat = (id) => {
    axios.delete(`/api/users/${user.id}/cats/${id}`)
      .then( res => {
        setCats(cats.filter( c => c.id !== id))
        navigate('/cats')
      })
      .catch( err => console.log(err))
  }

  const randomCats = () => {
    axios.get(`/api/users/${user.id}/randomCats`)
      .then( res => setRandCat(res.data) )
      .catch( err => console.log(err))
  }

  const switchOwner = (id) => {
    axios.put(`/api/users/${user.id}/cats/${id}/switchOwner`)
      .then( res => {
        setCats([...cats, res.data])
        setRandCat(randCat.filter( c => c.id !== id))
      } )
      .catch( err => console.log(err))
  }

  return (
    <CatContext.Provider value={{
      cats,
      randCat,
      getAllCats,
      addCat,
      updateCat,
      deleteCat,
      randomCats, 
      switchOwner,
    }}>
      { children }
    </CatContext.Provider>
  )
}

const ConnectedCatProvider = (props) => (
  <AuthConsumer>
    { value => <CatProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedCatProvider;