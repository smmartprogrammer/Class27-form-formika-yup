import React from 'react';
import Userform from './Userform';
import UserFromwithFormik from './UserFromwithFormik';
import UserFromwithFormikContext from './UserFromwithFormikContext';
import UserFromwithFormikValidation from './UserFromwithFormikValidation';
import UserFormikwithMaterialUI from './UserFormikwithMaterialUI';

function App() {
  return (
    <div className="App">
      <Userform />
      <UserFromwithFormik />
      <UserFromwithFormikValidation />
      <UserFromwithFormikContext />
      <UserFormikwithMaterialUI />
    </div>
  );
}

export default App;
