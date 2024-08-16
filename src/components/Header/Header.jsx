import { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../assets/images/user.png'
import './Header.css'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchInput !== '') {
      dispatch(fetchAsyncMovies(searchInput));
      dispatch(fetchAsyncShows(searchInput));
      setSearchInput('');
      navigate(`/search/query?${searchInput}`);
    }
  }

  return (
    <>
      <div className='header'>
        <div className="logo"><Link to='/'>Movie-App</Link></div>
        <div className='search-bar big-one'>
          <form>
            <input
              type="text"
              value={searchInput}
              placeholder='Search Movies or Shows'
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className='search-btn' onClick={submitHandler}>🔍</button>
          </form>
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
      <div className='search-bar small-one'>
        <form
          onSubmit={submitHandler}>
          <input
            type="text"
            value={searchInput}
            placeholder='Search Movies or Shows'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' className='search-btn'>🔍</button>
        </form>
      </div>
    </>
  )
}

export default Header