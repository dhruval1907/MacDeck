import "./app.scss"
// import hero from "";
import hero from "../public/hero2.jpg"


const App = () => {
  return (
    <div>
      <main style={{ backgroundImage: `url(${hero})` ,backgroundPosition:"center",backgroundSize:"cover"}}></main>
    </div>
  )
}

export default App