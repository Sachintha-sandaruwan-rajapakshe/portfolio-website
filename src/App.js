import './App.css';
import Hero from './components/Hero';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <MainPage/>

       <div className="fixed bottom-8 right-4 md:hidden flex flex-col gap-6 z-50 mr-2">
        <button
          onClick={() => window.scrollBy({ top: -600, behavior: "smooth" })}
          className="bg-slate-800 p-2 rounded-full text-white"
        >
          ⬆
        </button>

        <button
          onClick={() => window.scrollBy({ top: 600, behavior: "smooth" })}
          className="bg-slate-800 p-2 rounded-full text-white animate-bounce"
        >
          ⬇
        </button>
      </div>
    </div>
  );
}

export default App;