import "./app.scss"
// import hero from "../public/hero2.jpg"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import MacWimdow from "./windows/MacWimdow"
import Github from "./windows/Github"
import Notes from "./windows/Notes"
import hero1 from "../src/assets/hero2.jpg";

const App = () => {
  return (
    <div>
      <main style={{ backgroundImage: `url(${hero1})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <Dock />
        <Nav />
        <Github/>
        <Notes />
      </main>
    </div>
  )
}

export default App