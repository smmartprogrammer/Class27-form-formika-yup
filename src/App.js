import React from 'react';
import Userform from './Userform';
import UserFromwithFormik from './UserFromwithFormik';
import UserFromwithFormikContext from './UserFromwithFormikContext';
import UserFromwithFormikValidation from './UserFromwithFormikValidation';

function App() {
  return (
    <div className="App">
      <Userform />
      <UserFromwithFormik />
      <UserFromwithFormikValidation />
      <UserFromwithFormikContext />
    </div>
  );
}

export default App;
