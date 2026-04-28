import React, { useState } from "react";

const ControlledForm = () => {
  let [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });

  function updateTheState(e) {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <h1>Hi There</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(student);
        }}
      >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={updateTheState}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={updateTheState}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={student.password}
            onChange={updateTheState}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Name: {student.name}</h2>
      <h2>Email: {student.email}</h2>
      <h2>Password: {student.password}</h2>
    </>
  );
};

export default ControlledForm;
