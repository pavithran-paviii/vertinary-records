import { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { GlobalContext } from "./context/Globalcontext";
import Home from "./pages/Home";

function App() {
  const { setContainerHeight } = useContext(GlobalContext);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight = `${
        100 - (window.pageYOffset / window.innerHeight) * 100
      }vh`;
      setContainerHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
