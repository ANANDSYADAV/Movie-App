import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetails, getSelectedMovieOrShowDetail, removeSelectedMovieOrShowDetail } from '../../features/movies/MovieSlice'
import './MovieDetail.css'
import DetailsSkeleton from '../LoadingSkeleton/DetailsSkeleton'
import { SkeletonTheme } from 'react-loading-skeleton'

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShowDetail)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
    dispatch(removeSelectedMovieOrShowDetail());
  }, [dispatch, imdbID])

  return (
    <>
      <SkeletonTheme baseColor="lightblue" highlightColor="gray">
        {Object.keys(data).length === 0 ?
          (<DetailsSkeleton />)
          :
          (
            <div className='movie-section'>
              <div className="section-left">
                <div className="movie-title">{data.Title}</div>
                <div className='movie-rating big-screen'>
                  <span>
                    IMDB Rating ⭐ : {data.imdbRating} /  10
                  </span>
                  <span>
                    IMDB Votes 👍 : {data.imdbVotes}
                  </span>
                  <span>
                    Runtime ⏱ : {data.Runtime}
                  </span>
                  <span>
                    Year 🗓 : {data.Year}
                  </span>
                </div>
                <div className='small-screen'>
                  <div className='movie-ratings'>
                    <span>
                      IMDB Rating ⭐ : {data.imdbRating} / 10
                    </span>
                    <span>
                      IMDB Votes 👍 : {data.imdbVotes}
                    </span>
                    <span>
                      Runtime ⏱ : {data.Runtime}
                    </span>
                    <span>
                      Year 🗓 : {data.Year}
                    </span>
                  </div>
                  <div className="small-poster">
                    <img src={data.Poster} alt={data.Title} />
                  </div>
                </div>
                <div className="movie-plot">{data.Plot}</div>
                <div className="movie-info">
                  <div>
                    <span>Director </span> <span> {data.Director}</span>
                  </div>
                  <div>
                    <span>Stars </span> <span> {data.Actors}</span>
                  </div>
                  <div>
                    <span>Genres </span> <span> {data.Genre}</span>
                  </div>
                  <div>
                    <span>Languages </span> <span> {data.Language}</span>
                  </div>
                  <div>
                    <span>Awards </span> <span> {data.Awards}</span>
                  </div>
                </div>
              </div>
              <div className="section-right big-screen">
                <img src={data.Poster} alt={data.Title} />
              </div>
            </div>
          )}
      </SkeletonTheme>
    </>
  )
}

export default MovieDetail