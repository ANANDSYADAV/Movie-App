import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import MovieDetail from './components/MovieDetail/MovieDetail.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import SearchContent from './components/SearchedContent/SearchContent.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:imdbID" element={<MovieDetail />} />
          <Route path="/search/query?/:keyword" element={<SearchContent />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App