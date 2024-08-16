import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../Apis/MovieApi'
import { APIKey } from '../../Apis/MovieApiKey.js'

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (searchInput) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${searchInput}&type=movie`)
        return response.data;
    }
)

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (searchInput) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${searchInput}&type=series`)
        return response.data;
    }
)

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetails",
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data;
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
    showSearchBar: true,
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // cleanup function for details page
        removeSelectedMovieOrShowDetail: (state) => {
            state.selectMovieOrShow = {};
        },
        setSearchBarStatus: (state, action) => {
            state.showSearchBar = action.payload;
        }
    },
    extraReducers: (builder) => {

        // For Movies
        builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        }),

        // For Shows
        builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
            state.shows = action.payload;
        }),

        // MovieOrShowDetails
        builder.addCase(fetchAsyncMovieOrShowDetails.fulfilled, (state, action) => {
            console.log("Movie Details fetched");
            state.selectMovieOrShow = action.payload;
        })
    }
});

export const { removeSelectedMovieOrShowDetail, setSearchBarStatus } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShow = (state) => state.movies.shows;
export const getSelectedMovieOrShowDetail = (state) => state.movies.selectMovieOrShow;
export const getSearchBarStatus = (state) => state.movies.showSearchBar;
export default movieSlice.reducer;