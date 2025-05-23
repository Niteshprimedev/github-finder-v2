import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../index.css'
import Navbar from './layout/Navbar.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import NotFound from '../pages/NotFound.jsx';
import Footer from '../components/layout/Footer.jsx'
import { GithubProvider } from '../context/github/GithubContext.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar></Navbar>
          <main className='container mx-auto px-3 pb-12'></main>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/notfound' element={<NotFound></NotFound>}></Route>
            <Route path='/*' element={<NotFound urlParam='notfound'></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
