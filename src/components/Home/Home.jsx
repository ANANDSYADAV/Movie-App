import { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing.jsx'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice.js'

function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <MovieListing />
  )
}

export default Home