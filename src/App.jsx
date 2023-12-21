import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import MovieDetail from './components/MovieDetail/MovieDetail.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App