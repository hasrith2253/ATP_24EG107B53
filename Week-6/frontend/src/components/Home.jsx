import React, { useContext } from 'react';
import { EmpContext } from '../context/contextProvider';
import Test from "./Test";

function Home() {
    const { counter, changeCounter, decrementCounter } = useContext(EmpContext);

    return (
        <div>
            <h1>Home</h1>
            <div className="border-2 border-gray-400 p-4 rounded-lg inline-block">
                <p className="text-center mb-2">Counter: {counter}</p>
                <div className="flex justify-center space-x-2">
                    <button onClick={decrementCounter} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
                    <button onClick={changeCounter} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
                </div>
            </div>
        </div>
    );
}

export default Home;