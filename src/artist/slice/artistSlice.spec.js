import artistReducer, { pending, searching, clearDetails, rejected, fulfilled } from "./artistSlice";

describe('Testing artist reducer', () => {
    const initialState = {
        artists: [],
        artist: {},
        albums: [],
        tracks: [],
        error: null,
        loading: false
    };

    test('should handle clear details', () => {
        const artist = { name: "Ricky", albums: 5, fans: 300 };
        const actual = artistReducer({
            artist,
            albums: [artist],
            tracks: [artist, artist],
        }, clearDetails());
        expect(actual.tracks).toEqual([]);
        expect(actual.albums).toEqual([]);
        expect(actual.artist).toEqual({});
    });

    test('should handle pending', () => {
        const actual = artistReducer(initialState, pending());
        expect(actual.loading).toEqual(true);
    });

    test('should handle searching', () => {
        const actual = artistReducer(initialState, searching());
        expect(actual.loading).toEqual(true);
        expect(actual.searching).toEqual(true);
    });

    test('should handle rejected', () => {
        const actual = artistReducer(initialState, rejected('unathorized request'));
        expect(actual.loading).toEqual(false);
        expect(actual.error).toEqual('unathorized request');
    });

    test('should handle fulfilled artist', () => {
        const artistInfo = { name: "Ricky", albums: 5, fans: 10000 };
        const actual = artistReducer(initialState, fulfilled({ name: 'artist', data: artistInfo }));
        expect(actual.loading).toEqual(false);
        expect(actual.artist).toEqual(artistInfo);
    });

    test('should handle fulfilled albums', () => {
        const albums = [{ name: "Ricky Album", tracks: 5, fans: 200 }];
        const actual = artistReducer(initialState, fulfilled({ name: 'albums', data: albums }));
        expect(actual.loading).toEqual(false);
        expect(actual.albums).toEqual(albums);
    });

    test('should handle fulfilled artists', () => {
        const artist = { name: "Ricky", albums: 5, fans: 300 };
        const actual = artistReducer(initialState, fulfilled({ name: 'artists', data: [artist, artist] }));
        expect(actual.loading).toEqual(false);
        expect(actual.artists).toEqual([artist, artist]);
    });
    test('should handle fulfilled tracks', () => {
        const tracks = { name: "Ricky", duration: 500, fans: 100 };
        const actual = artistReducer(initialState, fulfilled({ name: 'tracks', data: [tracks, tracks, tracks] }));
        expect(actual.loading).toEqual(false);
        expect(actual.tracks).toEqual([tracks, tracks, tracks]);
    });
});