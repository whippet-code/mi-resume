import React from 'react';


function Link(props) {
  return(
    <div className="Link">
      <a href={props.links.link}><img src={props.links.logo} alt="link logo"/>{props.links.text}</a>
    </div>
  )
}

export default Link;