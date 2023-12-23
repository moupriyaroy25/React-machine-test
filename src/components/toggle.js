import React, { useState } from 'react'
import Doughnutchart from './doughnutchart';
import Dashboard from './dashboard';


const Toggle = () => {

const [isTable, setIsTable] = useState(true);

 const handleToggle = () => {
    setIsTable(!isTable);
 };
  return (
    <div>
      <button onClick={handleToggle}>{isTable ? 'Switch to Chart' : 'Switch to Table'}</button>
      {isTable ? <Dashboard/> : <Doughnutchart />}
    </div>
  )
}

export default Toggle