import './App.css';
import Hero from './components/Hero';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <MainPage/>
    </div>
  );
}

export default App;