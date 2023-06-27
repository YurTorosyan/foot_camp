import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header"
import PageNotFound from "./Components/PageNotFound"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Fixtures from "./redux/features/FixtureSlice/Fixtures"

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fixtures" element={<Fixtures />} />
            {/* <Route path="/leagues" element={<Live />} /> */}
            {/* <Route path="/teams" element={<Live />} /> */}
            {/* <Route path="/players" element={<Live />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
