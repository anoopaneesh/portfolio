import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { About, Contact, Home, Works } from "./screens";
import { Hero, Navbar } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/works' element={<Works />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App