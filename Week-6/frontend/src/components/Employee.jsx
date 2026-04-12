import { useLocation, useNavigate } from 'react-router'

function Employee() {
  const navigate = useNavigate();
  const location = useLocation();
  const { empObj } = location.state || {};

  if (!empObj) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-red-600">Employee not found. Please go back to the list.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-300 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800">Employee Details</h2>
          <p className="text-sm text-gray-600 mt-1">Quick view of selected employee</p>
        </div>

        <div className="px-8 py-6 space-y-4">
          <div className="flex justify-between items-center p-3 rounded-xl border border-gray-200 bg-gray-50">
            <span className="text-gray-500">Name</span>
            <span className="font-semibold text-gray-800">{empObj.name}</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-xl border border-gray-200 bg-gray-50">
            <span className="text-gray-500">Email</span>
            <span className="font-semibold text-gray-800">{empObj.email}</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-xl border border-gray-200 bg-gray-50">
            <span className="text-gray-500">Mobile</span>
            <span className="font-semibold text-gray-800">{empObj.mobile}</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-xl border border-gray-200 bg-gray-50">
            <span className="text-gray-500">Designation</span>
            <span className="font-semibold text-gray-800">{empObj.designation}</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-xl border border-gray-200 bg-gray-50">
            <span className="text-gray-500">Company</span>
            <span className="font-semibold text-gray-800">{empObj.companyName}</span>
          </div>
        </div>

        <div className="px-8 py-4 border-t border-gray-200 bg-white flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate('/list')}
            className="px-4 py-2 rounded-lg border bg-black border-gray-300 text-white hover:bg-red-500 transition duration-100 cursor-pointer"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Employee