import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className='bg1'>
      <div className='bg-image'>
        <img src='bg.webp' alt='Background' />
      </div>
      <div className='text-overlay'>
        {/* <img className='overlay-image' src='templogo.png' alt='Overlay' /> */}
        <h1>Welcome to Terrace Gardeners</h1>
        <button class="beautiful-button">
  Chat Now
</button>
      </div>
      

    </div>
  );
}

export default Homepage;
