import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {
  const [empList, setEmpList] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: "",
    firstName: "",
    email: "",
    aadhaar: "",
    salary: "",
  });
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [errors, setErrors] = useState({});
  let [first, setfirst] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:9090/emp/get-all-emps")
      .then((resp) => {
        setEmpList(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching employee list:", error);
      });
      console.log(empList)
  },[first]);

  const handleDelete = (id) => {
    console.log(id);
    const deleteUrl = `http://localhost:9090/emp/delete-emp/${id}`;
    axios
      .delete(deleteUrl)
      .then(() => {
        const updatedEmpList = empList.filter((emp) => emp.id !== id);
        setfirst(first+=1)
        setEmpList(updatedEmpList);
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  const handleUpdate = (emp) => {
    console.log(emp);
    setUpdateData(emp);
    setShowUpdateModal(true);
    setfirst(first+=1)
  };

  const handleChange = (evt) => {
    setUpdateData({ ...updateData, [evt.target.name]: evt.target.value });
    setErrors({ ...errors, [evt.target.name]: "" });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const updateUrl = `http://localhost:9090/emp/update-emp/${updateData.id}`;
    axios
      .put(updateUrl, updateData)
      .then((resp) => {
        alert(
          `${resp.data.firstName} with id ${resp.data.id} updated successfully!`
        );
        setShowUpdateModal(false);
        setUpdateData({
          id: "",
          firstName: "",
          email: "",
          aadhaar: "",
          salary: "",
        });
        
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h1>Employee List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Aadhaar</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.firstName}</td>
              <td>{emp.email}</td>
              <td>{emp.aadhaar}</td>
              <td>{emp.salary}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleUpdate(emp)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() =>{
                     handleDelete(emp.employeeId)
                    // console.log(emp);
                  }
                }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {showUpdateModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Employee</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowUpdateModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={updateData.firstName}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.firstName && "is-invalid"
                      }`}
                      required
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={updateData.email}
                      onChange={handleChange}
                      className={`form-control ${errors.email && "is-invalid"}`}
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="aadhaar" className="form-label">
                      Aadhaar:
                    </label>
                    <input
                      type="number"
                      id="aadhaar"
                      name="aadhaar"
                      value={updateData.aadhaar}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.aadhaar && "is-invalid"
                      }`}
                      required
                    />
                    {errors.aadhaar && (
                      <div className="invalid-feedback">{errors.aadhaar}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="salary" className="form-label">
                      Salary:
                    </label>
                    <input
                      type="number"
                      id="salary"
                      name="salary"
                      value={updateData.salary}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.salary && "is-invalid"
                      }`}
                      required
                    />
                    {errors.salary && (
                      <div className="invalid-feedback">{errors.salary}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update Employee
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmpList;
