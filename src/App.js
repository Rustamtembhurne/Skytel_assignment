import './App.css';
import React, { useState } from 'react'
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'


function App() {
  const [value, setvalue] = useState('')

  const handleOnchange = val => {
    setvalue(val)
  }

  const options = [
    { label: "India", value: "India" },
    { label: "Ghana", value: "Ghana" },
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "Argentina", value: "Argentina" },
    { label: "Argentina", value: "Argentina" },
    { label: "Cambodia", value: "Cambodia" },
    { label: "Belarus", value: "Belarus" },
    { label: "Canada", value: "Canada" },
    { label: "Germany", value: "Germany" },
    { label: "Canada", value: "Canada" },
    { label: "Afghanistan", value: "Afghanistan" },
    { label: "Brazil", value: "Brazil" },
    { label: "Algeria", value: "Algeria" },
    { label: "Burkina Faso", value: "Burkina Faso" },
    { label: "United States", value: "United States" },
  ]

  
  return (
    <div>
        <h1 className='app'>Multiselect Dropdown Checkboxes</h1>
      <div className="app-select">
        <br></br>
        <h4>Selects :- {value}</h4>
       

        
      </div>


      <div className='app-select'>
        <MultiSelect
          onChange={handleOnchange}
          options={options}



        />
      </div>
    </div>
  );
}

export default App;
