import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

function EditEmployee() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { empObj } = location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: empObj.name,
      email: empObj.email,
      mobile: empObj.mobile,
      designation: empObj.designation,
      companyName: empObj.companyName,
    },
  });

  //form submit
  const onFormSubmit = async (updatedEmpObj) => {
    try {
      setLoading(true);
      //make HTTP PUT req
      let res = await fetch(`http://localhost:4000/emp-api/employees/${empObj._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEmpObj),
      });

      if (res.status === 200) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error response is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <h1 className="text-5xl text-center text-black-500 mb-8">Edit Employee</h1>

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input
            type="text"
            placeholder="Enter name"
            {...register("name")}
            className="mb-3 border border-gray-300 p-3 w-full rounded-2xl bg-gray-50"
          />
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
            className="mb-3 border border-gray-300 p-3 w-full rounded-2xl bg-gray-50"
          />
          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobile")}
            className="mb-3 border border-gray-300 p-3 w-full rounded-2xl bg-gray-50"
          />
          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation")}
            className="mb-3 border border-gray-300 p-3 w-full rounded-2xl bg-gray-50"
          />
          <input
            type="text"
            placeholder="Enter name of the company"
            {...register("companyName")}
            className="mb-3 border border-gray-300 p-3 w-full rounded-2xl bg-gray-50"
          />
          <button
            type="submit"
            className="text-2xl rounded-2xl bg-black text-white block mx-auto p-4 mt-2 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Update Emp
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;