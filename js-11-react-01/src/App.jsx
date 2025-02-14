
import './App.css'
import { Navbar } from './Components/navbar/navbar'
import { Footer } from './Components/footer/footer'
import { Main } from './Components/main/main'
import {Counter} from './Components/counter/counter'


function App() {

  /* const [count, setCount] = useState(0) */

  return (
    <> 
      <Navbar src="/img/dinosaurio" alt="Dino programador" />
        <img src="" alt="" />
      <Main />

      <Counter />
      <Counter />

      {/* Ejemplo de como poner string y numero */}
      <Footer year="2025" cohorte={50} inlove={true} frase={true}  />

      
    </>
  )
}

export default App;
