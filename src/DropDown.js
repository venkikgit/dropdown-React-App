import React, { useState } from 'react';
import styles from './styles/dropdown.module.css';

const DropDown = (props) => {
  const [active,setActive] = useState(false);
  const options = ['No','Yes','Probably'];
  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseLeave = () =>{
    setActive(false);
  }
  const handleClick = () => {
    setActive(prev => !prev)

  }
  const handleOptions = (e) => {
    const item = e.target.textContent;
    props.setSelect(item);
    setActive(false);
  }
  return (
    <div className={styles.DropDownContainer} >
      <div
      className={styles.btn}
      value={props.select}
      onMouseEnter={handleMouseOver}
      onClick={handleClick}
      >
       Choose options{/* {props.select!==''?(<span> {props.select}</span>):'Choose option'} */}
      </div>
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

export default DropDown