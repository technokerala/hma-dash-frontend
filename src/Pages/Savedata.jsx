import React, { useState } from "react";
import "../Savedata.css";
import axios from "axios";

function Savedata() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [district, setDistrict] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8000/customers", {
        
          "name": name,
          "age": age,
          "dob": dob,
          "gender": gender,
          "district": district,
          "mob": contact
      
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
      
      alert("User details saved successfully: " + response.data.message);
      handleReset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error saving user details:", error);
      
      alert("Failed to save user details: " + (error.response?.data?.message || error.message));
    }
  };

  const handleReset = () => {
    setName("");
    setAge("");
    setDob("");
    setGender("male");
    setDistrict("");
    setContact("");
  };
 
  return (
    <div className="App">
      <h1>User Registration</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
          <label htmlFor="age">Enter Age* </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
            min="0"
            max="120"
            required
          />
          <label htmlFor="dob">Enter DOB* </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) =>setDob(e.target.value)}
            required
          />
          <label>Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <label htmlFor="district">Enter District* </label>
          <input
            type="text"
            name="district"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Enter District"
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile Number"
            pattern="[0-9]{10}"
            required
          />
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Savedata;
