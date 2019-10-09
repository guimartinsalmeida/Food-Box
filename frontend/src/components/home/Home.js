import React from 'react';
import {Link} from 'react-router-dom'
import '../../index.css'
function Home() {
  return (
    <div>
    <div className="home">
      <div className='food-box-logo'>
      <h1 className='h1'>Food-Box</h1>
      
      <img src='../../3.png' alt='logo'></img>
      </div>
      <div className='food-box-card'>
    
        <h2>Food-box</h2>
        <p> Escojas entre nuestros tres planes y te enviaremos productos que son adquiridos de productores locales
          <br/>le enviaremos las cantidades necesarias para que hagas las recetas sugeridas, evitando desperdicios de comida
        </p>
        <p>Los paquetes que tenemos estan piensados para que te dure una semana </p>
        <div>
      <Link to="/plans"> <button>escoja tu plan</button></Link>
      </div>
      </div>
      
   
      
     
      </div>
      
      
      
    </div>
  );
}

export default Home;
