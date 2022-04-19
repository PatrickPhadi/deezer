
import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../shared/utils/api'

const initialState = {
    artists: [],
    artist: {},
    albums: [],
    tracks: [],
    error: null,
    loading: false,
    searching: false
};

export const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        clearDetails: (state) => {
            state.artist = {};
            state.tracks = [];
            state.albums = [];
        },
        searching: (state) => {
            state.loading = true;
            state.searching = true;
        },
        pending: (state) => {
            state.loading = true;
        },
        rejected: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.searching = false;
        },
        fulfilled: (state, { payload }) => {
            state.loading = false;
            state.searching = false;
            state[payload.name] = payload.data;
        }
    }
});

export const { clearDetails, rejected, pending, searching, fulfilled } = artistSlice.actions;

export const artists = (state) => state.artist.artists;
export const artist = (state) => state.artist.artist;
export const albums = (state) => state.artist.albums;
export const tracks = (state) => state.artist.tracks;

/**
 * Search for artist
 * @param {String} query
 */
export const searchArtist = (query) => (dispatch) => {
    dispatch(searching());
    api(`/search/artist?q=${query}`, { method: 'GET' }).then(response => {
        dispatch(fulfilled({ name: 'artists', data: response.data }));
        dispatch(clearDetails());
    }).catch(error => {
        dispatch(rejected(error.message));
    });
}

/**
 * Get Artist Albums
 * @param {String} artistId
 */
export const getAlbums = (artistId) => (dispatch) => {
    dispatch(pending());
    api(`/artist/${artistId}/albums`, { method: 'GET' }).then(response => {
        dispatch(fulfilled({ name: 'albums', data: response.data }));
    }).catch(error => {
        dispatch(rejected(error.message));
    });
}

/**
 * Get Top track list
 * @param {String} artistId
 */
export const getTopTracks = (artistId) => (dispatch) => {
    dispatch(pending());
    api(`/artist/${artistId}/top?limit=5`, { method: 'GET' }).then(response => {
        dispatch(fulfilled({ name: 'tracks', data: response.data }));
    }).catch(error => {
        dispatch(rejected(error.message));
    });
}

/**
 * Get artist info
 * @param {String} artistId
 */
export const getArtist = (artistId) => (dispatch) => {
    dispatch(pending());
    api(`/artist/${artistId}`, { method: 'GET' }).then(response => {
        dispatch(fulfilled({ name: 'artist', data: response }));
    }).catch(error => {
        dispatch(rejected(error.message));
    });
}

/**
 * Get artist details
 * @param {String} artistId
 */
export const getFullArtistDetails = (artistId) => (dispatch) => {
    dispatch(getArtist(artistId));
    dispatch(getTopTracks(artistId));
    dispatch(getAlbums(artistId));
}

export default artistSlice.reducer;