import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ students, deleteStudent }) => {
  return students.map((student) => (
    <tr key={student.mobNo} className="view-data">
      <td>{student.studentName}</td>
      <td>{student.dateOfBirth}</td>
      <td>{student.gender}</td>
      <td>{student.village}</td>
      <td>{student.ps}</td>
      <td>{student.city}</td>
      <td>{student.domicile}</td>
      <td>{student.pincode}</td>
      <td>{student.mobNo}</td>
      <td>{student.email}</td>
      <td
        className="delete-btn"
        onClick={(mobNo) => deleteStudent(student.mobNo)}
      >
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};

export default View