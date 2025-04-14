import LandingPage from "./components/LandingPage"
import BackCircles from "../src/components/BackCircles"

function App() {

  return (
    <div>
      <LandingPage />
      <div className="absolute z-0 top-50 left-60">
        <BackCircles/>
      </div>
      <div className="absolute z-0 top-300 left-60">
        <BackCircles />
      </div>
    </div>
  )
}

export default App
