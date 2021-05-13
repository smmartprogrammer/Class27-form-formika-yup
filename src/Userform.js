import React, { useRef } from 'react';

function Userform() {
  const name = useRef();
  const age = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello submit');
    console.log(name.current.value);
    console.log(age.current.value);

    if(!name.current.value) {

    }
  };

  return (
    <div>
      <div>User Form</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" ref={name} type="text" />
          <div>Error</div>
        </div>
        <div>
          <label htmlFor="age ">Age: </label>
          <input id="age" ref={age} type="number" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Userform;
