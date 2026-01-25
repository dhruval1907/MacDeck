import "./app.scss"
// import hero from "";
import hero from "../public/hero2.jpg"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import MacWimdow from "./windows/MacWimdow"
import Github from "./windows/Github"


const App = () => {
  return (
    <div>
      <main style={{ backgroundImage: `url(${hero})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <Dock />
        <Nav />
        <Github/>
      </main>
    </div>
  )
}

export default App