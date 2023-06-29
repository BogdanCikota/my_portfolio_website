import { useEffect } from "react";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/Main";

function App() {
  useEffect(() => {
    ScrollToTop(true);
  }, []);

  return (
    <div className="App container">
      <Header />
      <Main />
      <div onClick={()=> ScrollToTop()} className="to-top-button"></div>
    </div>
  );
}

export default App;
