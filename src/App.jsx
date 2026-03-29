import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counterSlice';

const App = () => {
  useEffect(() => {
    document.title = "Counter Web App";
  }, []);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#eef9ff] font-sans p-4">
      
      {/* Clean Modern Card */}
      <div className="relative bg-white p-10 sm:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100 flex flex-col items-center gap-10 w-full max-w-md transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="text-sm font-medium tracking-[0.15em] text-slate-400 uppercase">
            Current Count
          </h2>
          
          <div className="flex justify-center items-center h-32 sm:h-40 w-full">
            <h1 className="text-7xl sm:text-8xl font-medium text-slate-800 tabular-nums tracking-tight">
              {count}
            </h1>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 sm:gap-6 w-full">
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-medium py-4 px-6 rounded-2xl shadow-lg shadow-rose-500/25 transition-all duration-300 active:scale-95 text-lg"
            aria-label="Decrease"
          >
            <span className="text-2xl leading-none mb-1 font-medium">-</span> 
            <span className="hidden sm:inline font-medium">Decrease</span>
          </button>
          
          <button
            onClick={() => dispatch(increment())}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-6 rounded-2xl shadow-lg shadow-indigo-600/25 transition-all duration-300 active:scale-95 text-lg"
            aria-label="Increase"
          >
            <span className="text-2xl leading-none mb-1 font-medium">+</span> 
            <span className="hidden sm:inline font-medium">Increase</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
