import { createContext, useState } from 'react';

export const EmpContext = createContext();

function ContextProvider({ children }) {
    // State for counter
    const [counter, setCounter] = useState(10);

    // Functions to update state
    const changeCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };;

    // State for employees
    const [employees, setEmployees] = useState([]);

    // Functions to manage employees
    const addEmployee = (employee) => {
        setEmployees([...employees, { ...employee, id: Date.now() }]);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(emp => emp.id === id ? { ...emp, ...updatedEmployee } : emp));
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    return (
        <EmpContext.Provider value={{ counter, changeCounter, decrementCounter, employees, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </EmpContext.Provider>
    );
}

export default ContextProvider;
