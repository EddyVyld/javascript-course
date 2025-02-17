import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from './Components/navbar/navbar'
import { Footer } from './Components/footer/footer'
import { Main } from './Components/main/main'
import { Counter } from './Components/counter/counter'
/* import { Contact } from './Components/Contact/contact' */


function App() {

  /* const [count, setCount] = useState(0) */

  return (
    <BrowserRouter>
      <Navbar src="/img/dinosaurio.jpg" alt="Dino programador" />
      <Routes>
        <Route path="/" element={<Main src="miProp" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<h1>Error 404</h1>} />

        {/* Este fue mi ejercicio */}
       {/*  <Route path="/" element={<Contact src="miProp" />} /> */}

      </Routes>
      <Footer year="2025" cohorte={50} inLove={false} />
    </BrowserRouter>
  );
}

export default App;
