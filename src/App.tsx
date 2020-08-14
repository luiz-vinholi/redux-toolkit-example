import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/ducks';
import { UserDuck } from './store/ducks/user/UserDuck';

function App() {
  const dispatch = useDispatch()

  const user = useSelector((state : RootState) => state.user)

  const handleOnClick = () => dispatch(UserDuck.actions.setUser({ name: 'Pimba' }))
  
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
