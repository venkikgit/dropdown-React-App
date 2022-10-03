import { useState } from 'react';
import './App.css';
import DropDown from './DropDown';
import styles from './styles/dropdown.module.css';
// Main App Component
function App() {
  // Initializing selected state using hook
  const [select,setSelect] = useState('');
  return (
    // Main Container
    <div className={styles.Container} >
       <div className={styles.header}>
          <h2>Should you use dropdown?</h2>
       </div>
       {/* Dropdown Component included*/}
       <DropDown select={select} setSelect={setSelect}/>
       {/* Below div for displaying selected option from dropdown menu */}
       <div className={styles.ans}>
        <p>Ans: {select}</p>
       </div>
    </div>
  );
}
// Exporting App component
export default App;
