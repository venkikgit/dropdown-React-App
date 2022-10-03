import React, { useState } from 'react';
import styles from './styles/dropdown.module.css';

// DropDown Component
const DropDown = (props) => {
  // Initialization of state variables
  const [active,setActive] = useState(false);
  const options = ['No','Yes','Probably'];
  // Handling mouse events
  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseLeave = () =>{
    setActive(false);
  }
  // Handling click events
  const handleClick = () => {
    setActive(prev => !prev)

  }
  // Function for handling options
  const handleOptions = (e) => {
    const item = e.target.textContent;
    props.setSelect(item);
    setActive(false);
  }
  return (
    // Main dropdown container
    <div className={styles.DropDownContainer} >
      {/* Button div */}
      <div
      className={styles.btn}
      value={props.select}
      onMouseEnter={handleMouseOver}
      onClick={handleClick}
      >
       Choose options{/* {props.select!==''?(<span> {props.select}</span>):'Choose option'} */}
      </div>
      {/* Div for displaying options based on mouse events */}
      {active &&
         (<div onClick={handleOptions} className={styles.dContent} onMouseLeave={handleMouseLeave}>
          {options.map((option)=>(
            <div className={styles.dItems}>{option}</div>
          ))}
      </div>)
      }
    </div>
  )
}
// Exporting dropdown component

export default DropDown