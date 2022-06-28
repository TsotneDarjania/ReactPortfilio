
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Slills from "./components/Slills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Slills/>
    </div>
  );
}

export default App;
