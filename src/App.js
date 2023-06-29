<<<<<<< HEAD
import { useEffect } from "react";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/Main";
=======
import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
>>>>>>> 96fe43eef8e9bc77b7767c29bc503eaa5b61edf5

function App() {
  useEffect(() => {
    ScrollToTop(true);
  }, []);

  return (
    <div className="App container">
      <Header />
      <Main />
<<<<<<< HEAD
      <div onClick={()=> ScrollToTop()} className="to-top-button"></div>
=======
      <ScrollToTop/>
>>>>>>> 96fe43eef8e9bc77b7767c29bc503eaa5b61edf5
    </div>
  );
}

export default App;
