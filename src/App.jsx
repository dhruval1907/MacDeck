import "./app.scss"
// import hero from "";
import hero from "../public/hero2.jpg"
import Dock from "./components/Dock"


const App = () => {
  return (
    <div>
      <main style={{ backgroundImage: `url(${hero})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <Dock />
      </main>
    </div>
  )
}

export default App