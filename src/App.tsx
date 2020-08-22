import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store';
import { UserDuck } from './store/ducks/user/UserDuck';
import { getUser, getUserChannel } from './store/sagas/user/UserSaga';

function App() {
  const dispatch = useDispatch()

  const user = useSelector((state : RootState) => state.user)

  const handleOnClick = () => {
    dispatch(UserDuck.actions.setUser({ name: 'Wait' }))
    setTimeout(() => getUser(), 1000)
  }

  useEffect(() => {
    const { take } = getUserChannel

    // Get value puted in saga
    take((value) => dispatch(UserDuck.actions.setUser({ name: value as string })))
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Clica no meu nome, chefe!
        <a
          onClick={handleOnClick}
          style={{ cursor: 'pointer' }}
        >
          {user.name}
        </a>
      </header>
    </div>
  );
}

export default App;
