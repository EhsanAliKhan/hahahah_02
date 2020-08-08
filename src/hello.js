import React from 'react';
import './hello.css';

function MyFunction({name, age}) {
  return (
    <div className="App">
        <div>Hello From <strong>{name}</strong>.
        <h2> having age {age}</h2>
        <div>The sum of <strong>10+13</strong> = {10+13}</div>
        <br></br>
        </div>
      </div>
  );
}

export default MyFunction;