import React, { useState, useEffect } from "react";
import { View } from "./View";
import axios from "axios";

// getting the values of local storage
const getDatafromStudent = () => {
  const data = localStorage.getItem("students");
  if (data) {
    // return JSON.parse(data);
    return data;
  } else {
    return [];
  }
};

const profilePIcDefault =
  "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

export const StudentPortal = () => {
  // main array of objects state || student state || student array of objects
  const [students, setStudents] = useState(getDatafromStudent());

  // input field states
  const [studentName, setstudentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [village, setVillage] = useState("");
  const [ps, setPs] = useState("");
  const [city, setCity] = useState("");
  const [domicile, setDomicile] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobNo, setMobNO] = useState("");
  const [email, setEmail] = useState("");

  // form submit event
  const handleAddStudentSubmit = (e) => {
    e.preventDefault();
    alert(`Registered Successfully!!!`)
    axios
      .post("http://localhost:9099/api/newStudent", localStorage)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // creating an object
    let student = {
      studentName,
      dateOfBirth,
      gender,
      village,
      ps,
      city,
      domicile,
      pincode,
      mobNo,
      email,
    };
    setStudents([...students, student]);
    setstudentName("");
    setDateOfBirth("");
    setGender();
    setVillage("");
    setPs("");
    setCity("");
    setDomicile("");
    setPincode("");
    setMobNO("");
    setEmail("");
  };

  // delete student
  const deleteStudent = (mobNo) => {
    const filteredStudents = students.filter((element, index) => {
      return element.mobNo !== mobNo;
    });
    setStudents(filteredStudents);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div className="wrapper">
      <h1 href="#">Student Portal</h1>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddStudentSubmit}
          >
            <h2>Student Registration Form</h2>
            <label>Name of the Applicant</label>
            <span className="astriccolor">*</span>
            <p></p>
            <input
              type="text"
              className="data"
              required
              onChange={(e) => setstudentName(e.target.value)}
              value={studentName}
              placeholder="Name"
            ></input>
            <div>
              <div className="profile_section">
                <p>Select Profile Picture :</p>
                <img
                  src={
                    localStorage.getItem("img")
                      ? localStorage.getItem("img")
                      : profilePIcDefault
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={50}
                  width={50}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Default file input example
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
            <br></br>
            <label>Date of Birth</label>
            <span className="astriccolor">*</span>
            <p></p>
            <input
              type="text"
              className="data"
              required
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
              placeholder="MM/DD/YYYY"
            ></input>
            <br></br>
            <label>Gender</label>
            <span className="astriccolor">*</span>
            <p></p>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Female
            <br></br>
            <label>Address</label>
            <span className="astriccolor">*</span>
            <p></p>
            <input
              type="text"
              className="form-control-name"
              required
              onChange={(e) => setVillage(e.target.value)}
              value={village}
              placeholder="Village"
            ></input>
            <input
              type="text"
              className="form-control-name"
              required
              onChange={(e) => setPs(e.target.value)}
              value={ps}
              placeholder="Police Station"
            ></input>
            <br></br>
            <input
              type="text"
              className="form-control-name"
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
            ></input>
            <select
              type="text"
              className="form-control-name"
              required
              onChange={(e) => setDomicile(e.target.value)}
              value={domicile}
            >
              <option defaultValue>--Select Domicile--</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana ">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <br></br>
            <input
              type="text"
              className="form-control-name"
              required
              onChange={(e) => setPincode(e.target.value)}
              value={pincode}
              placeholder="Pincode"
            ></input>
            <br></br>
            <label>Mob</label>
            <span className="astriccolor">*</span>
            <input
              type="text"
              className="data"
              required
              onChange={(e) => setMobNO(e.target.value)}
              value={mobNo}
              placeholder="Mobile No"
            ></input>
            <br></br>
            <label>E-Mail</label>
            <span className="astriccolor">*</span>
            <input
              type="text"
              className="data"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="E-Mail"
            ></input>
            <br></br>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Accept Terms And Conditions
              </label>
            </div>
            <br></br>
            <button type="submit" className="btn-btn-success-btn-md">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="view-container">
        <h4>Registered List</h4>
        <br></br>
          {students.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="data-arrangement">
                      <th>Name</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Village</th>
                      <th>Ps</th>
                      <th>City</th>
                      <th>Domicile</th>
                      <th>Pin</th>
                      <th>Mob-No</th>
                      <th>E-Mail</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View students={students} deleteStudent={deleteStudent} />
                  </tbody>
                </table>
              </div>
              <br></br>
              <button
                className="btn-btn-danger-btn-md"
                onClick={() => setStudents([])}
              >
                Remove All
              </button>
            </>
          )}
          {students.length < 1 && <div>No students are registered yet ...</div>}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
