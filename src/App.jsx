import "./app.scss"
// import hero from "../public/hero2.jpg"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import MacWimdow from "./windows/MacWimdow"
import Github from "./windows/Github"
import Notes from "./windows/Notes"
import hero1 from "../src/assets/main.jpg";
import Pdf from "./windows/Pdf"
import Spotify from "./windows/Spotify"
import Command from "./windows/Command"
import { useState } from "react"

const App = () => {

  const [windowstate, setwindowstate] = useState({
    github: false,
    notes: false,
    Pdf: false,
    Commmand: false,
    Spotify: false,
    resume: false,
    calender: false,
    link: false,
    email: false,
  })

  return (
    <div>
      <main style={{ backgroundImage: `url(${hero1})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <Dock windowsState={windowstate}
          setWindowsState={setwindowstate} />
        <Nav />
        {windowstate.github && <Github windowName="github" setWindowsState={setwindowstate} />}
        {windowstate.notes && <Notes windowName="notes" setWindowsState={setwindowstate} />}
        {windowstate.Pdf && <Pdf windowName="Pdf" setWindowsState={setwindowstate} />}
        {windowstate.Spotify && <Spotify windowName="Spotify" setWindowsState={setwindowstate} />}
        {windowstate.Commmand && <Command windowName="Commmand" setWindowsState={setwindowstate} />}
      </main>
    </div>
  )
}

export default App