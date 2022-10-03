import { useState } from 'react';
import './App.css';
import DropDown from './DropDown';
import styles from './styles/dropdown.module.css';

function App() {
  const [select,setSelect] = useState('');
  return (
    <div className={styles.Container} >
       <div className={styles.header}>
          <h2>Should you use dropdown?</h2>
       </div>
       <DropDown select={select} setSelect={setSelect}/>
       <div className={styles.ans}>
        <p>Ans: {select}</p>
       </div>
    </div>
  );
}

export default App;
