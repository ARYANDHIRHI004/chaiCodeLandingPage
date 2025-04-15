import LandingPage from "./components/LandingPage"
import {BackCircles, BigBackCircles} from "../src/components/BackCircles"

function App() {

  return (
    <div>
      <LandingPage />
      <div className="absolute z-0 top-50 left-100">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-300 left-40">
        <BackCircles color= {"bg-teal-200"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-500 right-0">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-800 left-0">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-900 left-200">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-900 right-0">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-1200 left-[60]">
        <BackCircles color= {"bg-teal-200"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-1300 right-0">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-1800 right-0">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-2000 left-0">
        <BackCircles color= {"bg-orange-500"} size = {"350px"} />
      </div>
      <div className="flex absolute z-0 top-2500 right-0">
        <BigBackCircles color= {"from-black-300 from-20% via-black-500 via-30% to-emerald-500 to-90%"} size = {"350px"} />
      </div>
      <div className="absolute z-0 top-3200 left-200">
        <BackCircles color= {"bg-teal-300"} size = {"350px"} />
      </div>
      <div className="flex absolute z-0 top-3600 right-0">
        <BigBackCircles color= {"from-black-300 from-20% via-black-500 via-30% to-orange-500 to-90%"} size = {"350px"} />
      </div>
    </div>
  )
}

export default App
