import './App.css';
import { Header } from './Header';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Skills } from './Skills/Skills';
import { useState } from 'react';
import { Contact } from './Contact/Contact';
import 'tailwindcss/tailwind.css'



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="App  bg-white dark:bg-gradient-to-b from-slate-900 to-slate-900 flexflex-col " >
      <Header toggleDarkMode={toggleDarkMode} />
      <Home  />
      <Skills />
      <About  />
      <Contact />
    </div>
  );
}

export default App;
