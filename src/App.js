import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';

function App() {
  return (
    <div className="App container">
      <Header/>
      <Main />
      <ScrollToTop/>
    </div>
  );
}

export default App;
