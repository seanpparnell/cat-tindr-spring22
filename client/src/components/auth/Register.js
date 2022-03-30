import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', fname: '', lname: '', age: '', image: '', password: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({ email: '', fname: '', lname: '', age: '', image: '', password: '', passwordConfirmation: '' })
    } else {
      alert('Password Does Not Match')
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='email'
          required
          name='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='Email'
        />
        <input 
          type='text'
          required
          name='fname'
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
          placeholder='First Name'
        />
        <input 
          type='text'
          required
          name='lname'
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
          placeholder='Last Name'
        />
        <input 
          type='number'
          required
          name='age'
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          placeholder='Age'
        />
        <input 
          type='text'
          required
          name='image'
          value={user.image}
          onChange={(e) => setUser({ ...user, image: e.target.value })}
          placeholder='User Image'
        />
        <input 
          type='password'
          required
          name='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='Password'
        />
        <input 
          type='password'
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
          placeholder='Password Confirmation'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;