import { useContext } from 'react';
import { EmpContext } from '../context/contextProvider';

function CounterBar() {
  const { counter, changeCounter, decrementCounter } = useContext(EmpContext);

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-slate-900 text-white shadow-2xl border-t border-slate-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <div className="flex flex-col gap-1">
          <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Global Counter</span>
          <span className="text-3xl font-semibold text-white">{counter}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrementCounter}
            className="rounded-2xl bg-red-500 px-5 py-3 text-lg font-semibold transition hover:bg-red-600"
          >
            -
          </button>
          <button
            type="button"
            onClick={changeCounter}
            className="rounded-2xl bg-emerald-500 px-6 py-3 text-lg font-semibold transition hover:bg-emerald-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterBar;
