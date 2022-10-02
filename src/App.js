import './App.css';
import About from './components/About/About';
import Body1 from './components/Body1/Body1';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body1/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
