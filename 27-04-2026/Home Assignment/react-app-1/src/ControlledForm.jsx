import React, { useState } from "react";

const ControlledForm = () => {
  let [student, setStudent] = useState({
    gender: "",
    skills: [],
  });

  function updateTheState(e) {
    const { value, type, checked, name } = e.target;

    if (type === "checkbox") {
      setStudent((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else {
      setStudent((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(student);
        }}
      >
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={student.gender === "Male"}
            onChange={updateTheState}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={student.gender === "Female"}
            onChange={updateTheState}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={student.gender === "Other"}
            onChange={updateTheState}
          />{" "}
          Other
        </div>

        <div>
          <label>Skills:</label>
          <input
            type="checkbox"
            value="CPP"
            checked={student.skills.includes("CPP")}
            onChange={updateTheState}
          />{" "}
          CPP
          <input
            type="checkbox"
            value="Java"
            checked={student.skills.includes("Java")}
            onChange={updateTheState}
          />{" "}
          Java
          <input
            type="checkbox"
            value="SQL"
            checked={student.skills.includes("SQL")}
            onChange={updateTheState}
          />{" "}
          SQL
          <input
            type="checkbox"
            value="Python"
            checked={student.skills.includes("Python")}
            onChange={updateTheState}
          />{" "}
          Python
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Gender: {student.gender}</h2>
      <h2>Skills: {student.skills.join(", ")}</h2>
    </>
  );
};

export default ControlledForm;
