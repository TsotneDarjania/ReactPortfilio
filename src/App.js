
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Slills from "./components/Slills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Slills/>
      <Work/>
    </div>
  );
}

export default App;
