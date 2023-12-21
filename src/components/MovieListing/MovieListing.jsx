import { useSelector } from "react-redux"
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice'
import MovieCard from "../MovieCard/MovieCard";
import './MovieListing.css'
import Slider from 'react-slick'
import { Settings } from "./settings";
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ListingSkeleton from './../LoadingSkeleton/ListingSkeleton'

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let movieList, showList = "";

  movieList = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)

  showList = shows.Response === "True" ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
  ) : (<div className="movies-error"><h3>{shows.Error}</h3></div>)

  return (
    <>
      <SkeletonTheme baseColor="lightblue" highlightColor="grey">

        <div className="movie-wrapper">
          <div className="movie-container">
            <h2>Movies</h2>
            {Object.keys(movies).length === 0 ? (<div className="movie-list"> <ListingSkeleton /> <ListingSkeleton /> <ListingSkeleton /> <ListingSkeleton /> <ListingSkeleton /> </div>) :
              (<div><Slider {...Settings}>{movieList}</Slider></div>)}
          </div>
          <div className="movie-container">
            <h2>Shows</h2>
            {Object.keys(shows).length === 0 ?
              (<div className="movie-list"> <ListingSkeleton /> <ListingSkeleton /> <ListingSkeleton /> <ListingSkeleton /> <ListingSkeleton /> </div>) :
              (<div><Slider {...Settings}>{showList}</Slider></div>)}
          </div>
        </div>
      </SkeletonTheme>
    </>
  )
}

export default MovieListing