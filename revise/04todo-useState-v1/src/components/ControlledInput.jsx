import { useState } from 'react';

function ControlledInput() {
  // 1. Initialize state to hold the input value
  const [inputValue, setInputValue] = useState('');

  // 2. Update the state whenever the user types
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} // Binds the input value to our state
        onChange={handleChange} // Triggers on every keystroke
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;