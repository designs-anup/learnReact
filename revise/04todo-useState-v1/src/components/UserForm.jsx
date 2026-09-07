import { useState } from 'react';

function UserForm() {
  // 1. Initialize state as an object containing all fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'developer' // Optional: sets a default value
  });

  // 2. A single dynamic handler for all text inputs, selects, etc.
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormData((prevData) => ({
      ...prevData,       // Copy the existing form fields
      [name]: value      // Update only the field that changed
    }));
  };

  // 3. Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the browser from reloading the page
    
    console.log('Form Submitted Data:', formData);
    // You can send 'formData' to your API here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          name="username" // Must match the state key
          value={formData.username} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" // Must match the state key
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit">Submit Data</button>
    </form>
  );
}

export default UserForm;