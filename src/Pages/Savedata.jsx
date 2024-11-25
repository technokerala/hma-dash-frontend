import { React, useState } from "react";
import "../Savedata.css";

function Savedata() {


  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [district, setDistrict] = useState("");
  const [contact, setContact] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name,
      age,
      dob,
      gender,
      district,
      contact
    );
    // Add your form submission logic here
  };

  const handleReset = () => {
    // Reset all state variables here
    setName("");
    setAge("");
    setDob("");
    setGender("male");
    setDistrict("");
    setContact("");
   
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
          <label for="age">Enter Age* </label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            required
          />
        <label for="dob">Enter DOB* </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Enter DOB"
            required
          />
           <label for="gender">Gender*</label>
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

        <label for="age">Enter District* </label>
          <input
            type="text"
            name="district"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Enter District"
            required
          />

          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />

          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Savedata;
