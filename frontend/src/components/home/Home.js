import React from 'react';
import {Link} from 'react-router-dom'
import '../../index.css'
function Home() {
  return (
    <div className="home">
      <h1>Food-Box</h1>
      <Link to="/plans"> <button>escoja tu plan</button></Link>
      
      
    </div>
  );
}

export default Home;
