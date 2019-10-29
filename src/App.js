import React from 'react';

function Food({ fav }) {
  return <h2>I like {fav}</h2>
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgyupsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
