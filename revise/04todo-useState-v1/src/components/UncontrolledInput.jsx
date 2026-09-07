import { useRef } from 'react';

function UncontrolledInput() {
  // 1. Create a reference pointer
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // 2. Access the value directly from the DOM node
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Value</button>
    </div>
  );
}

export default UncontrolledInput;