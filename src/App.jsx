import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Footer, Navbar } from './components'
import { About, Contact, Home, Projects } from './pages'

const App = () => {
    return (
        <main className="bg-slate-300/20 cursor-figma">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/*"
                        element={
                            <>
                                <Routes>
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/projects"
                                        element={<Projects />}
                                    />
                                    <Route
                                        path="/contact"
                                        element={<Contact />}
                                    />
                                    {/* <Route
                                        path="/resume"
                                        element={<Resume />}
                                    /> */}
                                </Routes>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </main>
    )
}

export default App
