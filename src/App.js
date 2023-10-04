import React, { useState } from 'react';
//import  Select  from 'react-select';
import './App.css';
import VegetableSelector from './VegetableSelector';
import UserLogin from './UserLogin/UserLogin';


// const options = [
//                 { value: "India", label:"Bharat"},
//                 { value: "Sri Lanka", label:"Lanka"},
//                 { value: "Bangaladesh", label: "Pulikutty"}
//                 ];

function App() {

    // const[selectedOptions, setSelectedOptions] = useState([]);

    // const handleChange = (selectedOption) => {
    //     setSelectedOptions(selectedOption);
    // };

  return (
    <div className="App">

      <UserLogin />
      {/* <VegetableSelector /> */}
      {/* <Select 

        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isMulti={ true }

      /> */}
    </div>
  );
}

export default App;
