import './App.css';
import Header from './components/header/Header';
import Section from './components/sections/Section';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Section />
      </main>
      <Footer />
    </>
  );
}

export default App;
