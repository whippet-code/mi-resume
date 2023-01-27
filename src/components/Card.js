import React from 'react';


function Card(props) {
  return(
    <div>
      <h4>{props.info.title}</h4>
      <p>{props.info.text}</p>   
    </div>
  )
}

export default Card;