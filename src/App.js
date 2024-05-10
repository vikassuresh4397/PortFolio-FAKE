import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      {/* <Introduction /> */}
      {/* <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
