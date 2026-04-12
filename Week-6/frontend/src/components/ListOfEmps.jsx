import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();



const gotoEmployee =(empObj)=>{
  navigate("/employee",{state:{empObj:empObj}});
}

const gotoEditEmployee = (empObj)=>{
  navigate("/edit-emp",{state:{empObj:empObj}});
};

const deleteEmployee = async (empId) => {
  if (!window.confirm("Delete this employee?")) return;
  const res = await fetch(`http://localhost:4000/emp-api/employees/${empId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    setEmps((prev) => prev.filter((emp) => emp._id !== empId));
  } else {
    const err = await res.json();
    alert(err.message || "Failed to delete employee");
  }
};

  useEffect(() => {
    async function getEmps() {
      let res = await fetch("http://localhost:4000/emp-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center mb-10">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <p className="font-medium text-gray-700">{empObj.email}</p>
            <p className="text-xl font-semibold text-gray-900">{empObj.name}</p>

            <div className="flex justify-around mt-4">
              <button className="bg-yellow-500 text-white p-2 rounded-lg cursor-pointer" onClick={() => gotoEmployee(empObj)}>View</button>
              <button className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer" onClick={() => gotoEditEmployee(empObj)}>Edit</button>
              <button className="bg-red-500 text-white p-2 rounded-lg cursor-pointer" onClick={() => deleteEmployee(empObj._id)}>Delete</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
