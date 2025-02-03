import "./style.css";
import Header from "./components/Header";
import Section1 from "./components/Section";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <DotLoader color={"#ffa500"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
