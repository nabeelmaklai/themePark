import { useState } from "react"
import boatsArray from "./data/boats"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Listings from "./components/Listings"
import BoatDetails from "./components/BoatDetails"
import ThemePark from "./components/ThemePark"
import WaterPark from "./components/WaterPark"

const App = () => {
  // The boatsArray is passed into state as the initial state for 'boats' in App.js
  const [boats, setBoats] = useState(boatsArray)
  const [newBoat, setNewBoat] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    openingTime: "",
    location: "",
    noOfRides: null,
    mainAttraction:"",


  })

  
  const addBoat = (e) => {
    e.preventDefault()
    const currentBoats = boats
    const createdBoat = {
      ...newBoat,
      id: parseInt(boats.length + 1),
      price: parseInt(newBoat.price),
    }
    currentBoats.push(createdBoat)
    setBoats(currentBoats)
    setNewBoat({ id: "", name: "", img: "", description: "", price: "" })
  }

  const handleChange = (e) => {
    setNewBoat({ ...newBoat, [e.target.name]: e.target.value })
    // return createdBoat.id
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listings" element={<Listings boats={boats} />} />
          <Route path="/Listings/:id" element={<BoatDetails boats={boats} />} />
          <Route
            path="/newThemePark"
            element={
              <ThemePark
                newBoat={newBoat}
                handleChange={handleChange}
                addBoat={addBoat}
              />
            }
          />
          {/* <Route path="/newWaterPark" element={<WaterPark />} /> */}
        </Routes>
            </main>
    </div>
  )
}

export default App
