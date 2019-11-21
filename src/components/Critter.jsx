import React from 'react';

function Critter(props){
  
  // function setinterval thing

  return(
    <div>
      <p>{props.name}</p>
      <p>Health {props.health}</p>
      {/* <button onClick={addHealth}>Love Me</button> */}
    </div>
  );
}

Critter.propTypes = {
  name: PropTypes.string,
  health: PropTypes.number
};


export default Critter;